require 'rails_helper'

describe PythonHashParser do

  it "should work with empty hash" do
    pythonHashParser = PythonHashParser.new("{}")
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
<<-HASH
{}
HASH
                                       )
  end

  it "should work with simplest case" do
    pythonHashParser = PythonHashParser.new("{a : 1, 'b' : 'test'}")
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
<<-HASH
{
  a  : 1,
  'b': 'test'
}
HASH
)
  end

  it "should work with various key types" do
    pythonHashParser = PythonHashParser.new("{a :   1, 'b' :  'test', \"c\" :  'test 1', 1 :    'test 2', 0.1 :  0.5, true : false}")
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
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

    pythonHashParser = PythonHashParser.new(input)
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
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
    pythonHashParser = PythonHashParser.new(":a : 1 :b : 'test'}")
    expect(pythonHashParser.isValidHash?).to be_falsey
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

    pythonHashParser = PythonHashParser.new(input)
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
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

    pythonHashParser = PythonHashParser.new(input)
    pythonHashParser.setKeyValueSeparator(":")
    pythonHashParser.setIndent("  ")
    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
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

    pythonHashParser = PythonHashParser.new(input)
    pythonHashParser.setKeyValueSeparator(":")
    pythonHashParser.setIndent("  ")
    pythonHashParser.setKeyFollowBySeparator(true)

    expect(pythonHashParser.isValidHash?).to be_truthy
    expect(pythonHashParser.beautify).to eq(
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