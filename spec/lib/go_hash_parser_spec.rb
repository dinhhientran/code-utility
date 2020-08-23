require 'rails_helper'

describe GoHashParser do

  it "should work with empty hash" do
    goHashParser = GoHashParser.new("map[string]string{}")
    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
<<-HASH
map[string]string{}
HASH
  )
  end

  it "should work with simplest case" do
    goHashParser = GoHashParser.new("map[string]string{'a': '1', 'b': 'test'}")
    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
<<-HASH
map[string]string{
  'a': '1',
  'b': 'test'
}
HASH
)
  end

  it "should work with long keys" do
    input = <<-INPUT
map[string]string{
    "registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone",
    "registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description",
}
INPUT

    goHashParser = GoHashParser.new(input)
    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
<<-HASH
map[string]string{
  "registrationRequest.contactFullName"   : "Full Name",
  "registrationRequest.companyName"       : "Company Name",
  "registrationRequest.contactEmail"      : "Email",
  "registrationRequest.contactPhone"      : "Phone",
  "registrationRequest.status"            : "Request Status",
  "registrationRequest.credentialUserName": "User Name",
  "registrationRequest.organization"      : "Company linkage on system",
  "registrationRequest.description"       : "Description"
}
HASH
)
  end

  it "hash input is not valid" do
    goHashParser = GoHashParser.new(":a : 1 :b : 'test'}")
    expect(goHashParser.isValidHash?).to be_falsey
  end

  it "should work with variable" do
    input = <<-INPUT
ab   := map[string]string{"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    goHashParser = GoHashParser.new(input)
    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
<<-HASH
ab := map[string]string{
  "registrationRequest.contactFullName"   : "Full Name",
  "registrationRequest.companyName"       : "Company Name",
  "registrationRequest.contactEmail"      : "Email",
  "registrationRequest.contactPhone"      : "Phone",
  "registrationRequest.status"            : "Request Status",
  "registrationRequest.credentialUserName": "User Name",
  "registrationRequest.organization"      : "Company linkage on system",
  "registrationRequest.description"       : "Description"
}
HASH
   )
  end

  it "should work with custom indent and key value separator" do
    input = <<-INPUT
ab   := map[string]string{"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    goHashParser = GoHashParser.new(input)
    goHashParser.setKeyValueSeparator(":")
    goHashParser.setIndent("  ")
    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
                                           <<-HASH
ab := map[string]string{
  "registrationRequest.contactFullName"   : "Full Name",
  "registrationRequest.companyName"       : "Company Name",
  "registrationRequest.contactEmail"      : "Email",
  "registrationRequest.contactPhone"      : "Phone",
  "registrationRequest.status"            : "Request Status",
  "registrationRequest.credentialUserName": "User Name",
  "registrationRequest.organization"      : "Company linkage on system",
  "registrationRequest.description"       : "Description"
}
                                       HASH
                                       )
  end

  it "should work with key follow by separator" do
    input = <<-INPUT
ab   := map[string]string{"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    goHashParser = GoHashParser.new(input)
    goHashParser.setKeyValueSeparator(":")
    goHashParser.setIndent("  ")
    goHashParser.setKeyFollowBySeparator(true)

    expect(goHashParser.isValidHash?).to be_truthy
    expect(goHashParser.beautify).to eq(
                                           <<-HASH
ab := map[string]string{
  "registrationRequest.contactFullName":    "Full Name",
  "registrationRequest.companyName":        "Company Name",
  "registrationRequest.contactEmail":       "Email",
  "registrationRequest.contactPhone":       "Phone",
  "registrationRequest.status":             "Request Status",
  "registrationRequest.credentialUserName": "User Name",
  "registrationRequest.organization":       "Company linkage on system",
  "registrationRequest.description":        "Description"
}
                                       HASH
                                       )
  end

end