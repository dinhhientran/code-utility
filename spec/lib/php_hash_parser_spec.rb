require 'rails_helper'

describe PhpHashParser do

  it "should work with empty align_hash" do
    phpHashParser = PhpHashParser.new("array()")
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
<<-HASH
array();
HASH
                                       )
  end

  it "should work with simplest case" do
    phpHashParser = PhpHashParser.new("array('a' => 1, 'b' => 'test')")
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
<<-HASH
array(
    'a' => 1,
    'b' => 'test'
);
HASH
)
  end

  it "should work with various key types" do
    phpHashParser = PhpHashParser.new("array('a' =>   1, 'b' =>  'test', \"c\" =>  'test 1', 1 =>    'test 2', 0.1 =>  0.5, true => false)")
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
<<-HASH
array(
    'a'  => 1,
    'b'  => 'test',
    "c"  => 'test 1',
    1    => 'test 2',
    0.1  => 0,
    true => false
);
HASH
)
  end

  it "should work with long keys" do
    input = <<-INPUT
array(
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

    phpHashParser = PhpHashParser.new(input)
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
<<-HASH
array(
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

  it "align_hash input is not valid" do
    phpHashParser = PhpHashParser.new(":a => 1 :b => 'test'}")
    expect(phpHashParser.isValidHash?).to be_falsey
  end

  it "should work with variable" do
    input = <<-INPUT
$ab   = array("registrationRequest.contactFullName"=>"Full Name",
    "registrationRequest.companyName"=>"Company Name",
    "registrationRequest.contactEmail"=>"Email",
    "registrationRequest.contactPhone"=>"Phone","registrationRequest.status"=>"Request Status",
    "registrationRequest.credentialUserName"=>"User Name",
    "registrationRequest.organization"=>"Company linkage on system",
    "registrationRequest.description"=>"Description"
);
    INPUT

    phpHashParser = PhpHashParser.new(input)
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
<<-HASH
$ab = array(
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
$ab   = array("registrationRequest.contactFullName"=>"Full Name",
    "registrationRequest.companyName"=>"Company Name",
    "registrationRequest.contactEmail"=>"Email",
    "registrationRequest.contactPhone"=>"Phone","registrationRequest.status"=>"Request Status",
    "registrationRequest.credentialUserName"=>"User Name",
    "registrationRequest.organization"=>"Company linkage on system",
    "registrationRequest.description"=>"Description"
)
    INPUT

    phpHashParser = PhpHashParser.new(input)
    phpHashParser.setIndent(2)
    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
                                           <<-HASH
$ab = array(
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
array("registrationRequest.contactFullName":"Full Name",
    "registrationRequest.companyName":"Company Name",
    "registrationRequest.contactEmail":"Email",
    "registrationRequest.contactPhone":"Phone","registrationRequest.status":"Request Status",
    "registrationRequest.credentialUserName":"User Name",
    "registrationRequest.organization":"Company linkage on system",
    "registrationRequest.description":"Description"
);
    INPUT

    phpHashParser = PhpHashParser.new(input)
    phpHashParser.setIndent(2)
    phpHashParser.setKeyFollowBySeparator(true)

    expect(phpHashParser.isValidHash?).to be_truthy
    expect(phpHashParser.beautify).to eq(
                                           <<-HASH
array(
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