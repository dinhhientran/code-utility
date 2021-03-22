export const DOWNLOAD_FILE_NAME_MODAL = `
<div class="modal modal-lg fade" id="download_file_name_modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Download</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-md-3">
                <label for="download_file_name">File name</label>
            </div>
            <div class="col-md-9">
                <div><input type="text" id="download_file_name" name="download_file_name" class="form-control form-control-sm" /></div>
                <div class="invalid-feedback mt-2" style="display: none;">File name should not be empty!</div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" id="download-btn">Download</button>
    </div>
  </div>
</div>
</div>
`