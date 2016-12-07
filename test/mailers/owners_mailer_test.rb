require 'test_helper'

class OwnersMailerTest < ActionMailer::TestCase
  test "appointment" do
    mail = OwnersMailer.appointment
    assert_equal "Appointment", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["russell@theironyard.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
