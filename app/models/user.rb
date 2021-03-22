require 'open-uri'

class User < ApplicationRecord
  has_one_attached :avatar
  has_many :versions

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  devise :omniauthable, :omniauth_providers => %i[github google_oauth2]

  def recent_shares
    versions.order('created_at DESC').first(6)
  end

  def self.from_omniauth_google_oauth2(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.full_name = auth.info.name
      if !auth.info.image.blank?
        # get bigger image
        auth.info.image = auth.info.image.gsub('s96-c', 's400-c')
        user.grab_avatar(auth)
      end
    end
  end

  def self.from_omniauth_github(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.full_name = auth.info.name
      user.grab_avatar(auth)
    end
  end

  def grab_avatar(auth)
    begin
      downloaded_image = open(auth.info.image)
      self.avatar.attach(
        io: downloaded_image,
        filename: (!auth.info.name.parameterize.blank? ? auth.info.name.parameterize + "-" : "") + SecureRandom.uuid + ".jpg"
      )
    rescue => ex
      puts "Cannot download avatar for " + auth.info.email + ": " + ex.message
    end
  end

  def update_avatar(image, original_filename)
    self.avatar.attach(
      io: File.open(image),
      filename: File.basename(original_filename).parameterize + "-" + SecureRandom.uuid + File.extname(original_filename)
    )
    self.avatar.variant(resize: '400x400>')
  rescue => ex
    puts "Cannot attach avatar for " + self.email + ": " + ex.message
  end
end
