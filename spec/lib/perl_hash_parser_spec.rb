require 'rails_helper'

describe PerlHashParser do

  it "should work with empty hash" do
    perlHashParser = PerlHashParser.new("()")
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
<<-HASH
();
HASH
                                       )
  end

  it "should work with simplest case" do
    perlHashParser = PerlHashParser.new("('a' => 1, 'b' => 'test')")
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
<<-HASH
(
    'a' => 1,
    'b' => 'test'
);
HASH
)
  end

  it "should work with various key types" do
    perlHashParser = PerlHashParser.new("('a' =>   1, 'b' =>  'test', \"c\" =>  'test 1', 1 =>    'test 2', 0.1 =>  0.5, -true => false)")
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
<<-HASH
(
    'a'   => 1,
    'b'   => 'test',
    "c"   => 'test 1',
    1     => 'test 2',
    0.1   => 0,
    -true => false
);
HASH
)
  end

  it "should work with long keys" do
    input = <<-INPUT
(
    "registrationRequest.contactFullName"=>"Full Name",
    "registrationRequest.companyName"=>"Company Name",
    "registrationRequest.contactEmail"=>"Email",
    "registrationRequest.contactPhone"=>"Phone",
    "registrationRequest.status"=>"Request Status",
    "registrationRequest.credentialUserName"=>"User Name",
    "registrationRequest.organization"=>"Company linkage on system",
    "registrationRequest.description"=>"Description",
)
INPUT

    perlHashParser = PerlHashParser.new(input)
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
<<-HASH
(
    "registrationRequest.contactFullName"    => "Full Name",
    "registrationRequest.companyName"        => "Company Name",
    "registrationRequest.contactEmail"       => "Email",
    "registrationRequest.contactPhone"       => "Phone",
    "registrationRequest.status"             => "Request Status",
    "registrationRequest.credentialUserName" => "User Name",
    "registrationRequest.organization"       => "Company linkage on system",
    "registrationRequest.description"        => "Description"
);
HASH
)
  end

  it "hash input is not valid" do
    perlHashParser = PerlHashParser.new(":a => 1 :b => 'test'}")
    expect(perlHashParser.isValidHash?).to be_falsey
  end

  it "should work with variable" do
    input = <<-INPUT
%ab   = ("registrationRequest.contactFullName"=>"Full Name",
    "registrationRequest.companyName"=>"Company Name",
    "registrationRequest.contactEmail"=>"Email",
    "registrationRequest.contactPhone"=>"Phone","registrationRequest.status"=>"Request Status",
    "registrationRequest.credentialUserName"=>"User Name",
    "registrationRequest.organization"=>"Company linkage on system",
    "registrationRequest.description"=>"Description"
);
    INPUT

    perlHashParser = PerlHashParser.new(input)
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
<<-HASH
%ab = (
    "registrationRequest.contactFullName"    => "Full Name",
    "registrationRequest.companyName"        => "Company Name",
    "registrationRequest.contactEmail"       => "Email",
    "registrationRequest.contactPhone"       => "Phone",
    "registrationRequest.status"             => "Request Status",
    "registrationRequest.credentialUserName" => "User Name",
    "registrationRequest.organization"       => "Company linkage on system",
    "registrationRequest.description"        => "Description"
);
HASH
   )
  end

  it "should work with custom indent and key value separator" do
    input = <<-INPUT
%ab   = ("registrationRequest.contactFullName"=>"Full Name",
    "registrationRequest.companyName"=>"Company Name",
    "registrationRequest.contactEmail"=>"Email",
    "registrationRequest.contactPhone"=>"Phone","registrationRequest.status"=>"Request Status",
    "registrationRequest.credentialUserName"=>"User Name",
    "registrationRequest.organization"=>"Company linkage on system",
    "registrationRequest.description"=>"Description"
)
    INPUT

    perlHashParser = PerlHashParser.new(input)
    perlHashParser.setIndent(2)
    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
                                           <<-HASH
%ab = (
  "registrationRequest.contactFullName"    => "Full Name",
  "registrationRequest.companyName"        => "Company Name",
  "registrationRequest.contactEmail"       => "Email",
  "registrationRequest.contactPhone"       => "Phone",
  "registrationRequest.status"             => "Request Status",
  "registrationRequest.credentialUserName" => "User Name",
  "registrationRequest.organization"       => "Company linkage on system",
  "registrationRequest.description"        => "Description"
);
                                       HASH
                                       )
  end

  it "should work with key follow by separator" do
    input = <<-INPUT
("registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
);
    INPUT

    perlHashParser = PerlHashParser.new(input)
    perlHashParser.setIndent(2)
    perlHashParser.setKeyFollowBySeparator(true)

    expect(perlHashParser.isValidHash?).to be_truthy
    expect(perlHashParser.beautify).to eq(
                                           <<-HASH
(
  "registrationRequest.contactFullName" =>    "Full Name",
  "registrationRequest.companyName" =>        "Company Name",
  "registrationRequest.contactEmail" =>       "Email",
  "registrationRequest.contactPhone" =>       "Phone",
  "registrationRequest.status" =>             "Request Status",
  "registrationRequest.credentialUserName" => "User Name",
  "registrationRequest.organization" =>       "Company linkage on system",
  "registrationRequest.description" =>        "Description"
);
                                       HASH
                                       )
  end

end