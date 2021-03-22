export const ENTER_SHARE_NAME_MODAL = `
<div class="modal fade" id="share_name_modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Share</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-md-3">
                <label for="share_name">Name</label>
            </div>
            <div class="col-md-9">
                <div><input type="text" id="share_name" name="share_name" placeholder="Enter name for this share" class="form-control form-control-sm" /></div>
                <div class="invalid-feedback mt-2" style="display: none;">Name should not be empty!</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3">
                <label for="share_name">Public <a href="#" onclick="return false;" title="Allow CodeUtility to publish this share on the site" style="font-size: 14px"><i class="far fa-question-circle"></i></a></label>
            </div>
            <div class="col-md-9">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="share_public" name="share_public" checked="checked" />
                    <label class="custom-control-label" for="share_public"></label>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" id="do-share-btn">Share</button>
    </div>
  </div>
</div>
</div>
`