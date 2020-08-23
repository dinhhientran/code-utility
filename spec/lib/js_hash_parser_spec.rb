require 'rails_helper'

describe JsHashParser do

  it "should work with empty hash" do
    jsHashParser = JsHashParser.new("{}")
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
<<-HASH
{}
HASH
                                       )
  end

  it "should work with simplest case" do
    jsHashParser = JsHashParser.new("{a : 1, 'b' : 'test'}")
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
<<-HASH
{
  a  : 1,
  'b': 'test'
}
HASH
)
  end

  it "should work with various key types" do
    jsHashParser = JsHashParser.new("{a :   1, 'b' :  'test', \"c\" :  'test 1', 1 :    'test 2', 0.1 :  0.5, true : false}")
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
<<-HASH
{
  a   : 1,
  'b' : 'test',
  "c" : 'test 1',
  1   : 'test 2',
  0.1 : 0,
  true: false
}
HASH
)
  end

  it "should work with long keys" do
    input = <<-INPUT
{
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

    jsHashParser = JsHashParser.new(input)
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
<<-HASH
{
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
    jsHashParser = JsHashParser.new(":a : 1 :b : 'test'}")
    expect(jsHashParser.isValidHash?).to be_falsey
  end

  it "should work with variable" do
    input = <<-INPUT
ab   = {"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    jsHashParser = JsHashParser.new(input)
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
<<-HASH
ab = {
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
ab   = {"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    jsHashParser = JsHashParser.new(input)
    jsHashParser.setKeyValueSeparator(":")
    jsHashParser.setIndent("  ")
    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
                                           <<-HASH
ab = {
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
ab   = {"registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
}
    INPUT

    jsHashParser = JsHashParser.new(input)
    jsHashParser.setKeyValueSeparator(":")
    jsHashParser.setIndent("  ")
    jsHashParser.setKeyFollowBySeparator(true)

    expect(jsHashParser.isValidHash?).to be_truthy
    expect(jsHashParser.beautify).to eq(
                                           <<-HASH
ab = {
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