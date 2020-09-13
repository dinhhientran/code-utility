require 'rails_helper'

describe JsHashParser do

  it "should work with empty align_hash" do
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

  it "should work with nested align_hash" do
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
    "test": {"registrationRequest.contactFullName":"Full Name", "registrationRequest.credentialUserName":"User Name"},
    "registrationRequest.contactPhone1":"Phone1"
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
  "registrationRequest.description"       : "Description",
  "test"                                  : {
                                               "registrationRequest.contactFullName"   : "Full Name",
                                               "registrationRequest.credentialUserName": "User Name"
                                            },
  "registrationRequest.contactPhone1"     : "Phone1"
}
                                     HASH
                                     )
  end

end