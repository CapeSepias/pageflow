require 'spec_helper'

module Pageflow
  describe UploadFileToS3Job do
    it 'assigns attachment_on_s3' do
      hosted_file = create(:hosted_file, :on_filesystem)

      UploadFileToS3Job.new.perform_with_result(hosted_file)

      expect(hosted_file.attachment_on_s3).to be_present
    end

    it 'destroys attachment_on_filesystem' do
      hosted_file = create(:hosted_file, :on_filesystem)

      UploadFileToS3Job.new.perform_with_result(hosted_file)

      expect(hosted_file.attachment_on_filesystem).not_to be_present
    end
  end
end
