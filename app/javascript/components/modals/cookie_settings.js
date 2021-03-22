export const COOKIE_SETTINGS_MODAL = `
<div class="modal fade" id="cookie_settings_modal" tabIndex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h4>Privacy Overview</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="cookie-setting-privacy-overview cookie-setting-collapsed">
                            <div class="cookie-setting-privacy-content">
                                <div id="cookie-setting-privacy-content-text">This website uses cookies to improve your
                                    experience while you navigate through the website. Out of these cookies, the cookies
                                    that are categorized as necessary are stored on your browser as they are essential for
                                    the working of basic functionalities...
                                </div>
                            </div>
                            <a class="btn-link" data-see="more" style="cursor: pointer" id="cookie-setting-privacy-see-btn">See more</a>
                        </div>
                    </div>
                    <div class="col-12 mt-3" id="cookie-setting-tabs">
                        <div class="cookie-setting-tab-section">
                            <div class="cookie-setting-tab-header" id="cookie-setting-tab-heading-necessary">
                                <a role="button" tabIndex="0" class="collapsed"
                                   data-toggle="collapse" data-target="#cookie-setting-necessary" aria-expanded="false" aria-controls="cookie-setting-necessary">
                                    <i class="fas fa-angle-right"></i><i class="fas fa-angle-down"></i> <span class="ml-1">Necessary</span>
                                </a>
                                <span class="cookie-setting-necessary-caption">Always Enabled</span>
                            </div>
                            <div id="cookie-setting-necessary" class="collapse cookie-setting-tab-content" aria-labelledby="cookie-setting-tab-heading-necessary" data-parent="#cookie-setting-tabs">
                                <div class="cookie-setting-tab-pane">
                                    <p>Necessary cookies are
                                        absolutely essential for the website to function properly. This category only
                                        includes
                                        cookies that ensures basic functionalities and security features of the website.
                                        These
                                        cookies do not store any personal information.</p>
                                </div>
                            </div>
                        </div>
                        <div class="cookie-setting-tab-section mt-3">
                            <div class="cookie-setting-tab-header">
                                <a role="button" tabIndex="0"  class="collapsed"
                                   data-toggle="collapse" data-target="#cookie-setting-non-necessary" aria-expanded="false" aria-controls="cookie-setting-non-necessary">
                                    <i class="fas fa-angle-right"></i><i class="fas fa-angle-down"></i><span class="ml-1">Non-Necessary</span>
                                </a>
                                <div class="custom-control custom-switch float-right">
                                  <input type="checkbox" class="custom-control-input" id="cookie-setting-non-necessary-enabled" checked="checked" />
                                  <label class="custom-control-label" for="cookie-setting-non-necessary-enabled">Enabled</label>
                                </div>
                            </div>
                            <div id="cookie-setting-non-necessary" class="collapse cookie-setting-tab-content" aria-labelledby="cookie-setting-tab-heading-non-necessary" data-parent="#cookie-setting-tabs">
                                <div class="cookie-setting-tab-pane">
                                    <p>Any cookies that may not
                                        be particularly necessary for the website to function and is used specifically to
                                        collect user personal data via analytics, ads, other embedded contents are termed as
                                        non-necessary cookies. It is mandatory to procure user consent prior to running
                                        these
                                        cookies on your website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="row">
                    <button class="btn btn-success" id="cookie-save-btn">SAVE & ACCEPT</button>
                </div>
            </div>
        </div>
    </div>
</div>
`