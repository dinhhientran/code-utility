export const SIGN_IN_MODAL = `
<div class="modal fade" id="sign_in_modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-body">
      <div class="row">
        <div class="col-md-6 p-4" style="border-right: 1px solid #aaa;padding-left: 3rem !important;">
          <div class="row">
            <div class="col-md-12">
              <h4>Discover more nice features</h4>
            </div>
          </div>
          <div class="row more-nice-features">
            <div class="col-md-13">
              <ul>
                <li>
                  <div><span class="primary-color bullet">✓</span> <span class="feature">Save Your Work</span></div>
                  <div class="description">Allow users to save beautified, converted code etc.</div>
                </li>
                <li class="mt-3">
                  <div><span class="primary-color bullet">✓</span> <span class="feature">Bookmark Tools</span></div>
                  <div class="description">Able to bookmark and access favorite tools easily.</div>
                </li>
                <li class="mt-3">
                  <div><span class="primary-color bullet">✓</span> <span class="feature">Remember Settings</span></div>
                  <div class="description">Site will remember your tool settings for later access.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-4 text-center">
          <div class="row">
            <div class="col-md-12">
              <h3>Sign in to CodeUtility</h3>
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-12">
              <span style="font-size: 13px">Create an account to discover more features</span>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12">
              <button id="sign_in_github_btn" data-loading="false" class="btn btn-outline-primary">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="sc-bdnylx gDXMLZ">
                  <path d="M14.9269 4.08427C14.2115 2.82782 13.2411 1.83308 12.0155 1.09983C10.7897 0.366548 9.45149 0 7.99993 0C6.54855 0 5.20991 0.36666 3.98437 1.09983C2.75864 1.83304 1.78831 2.82782 1.07293 4.08427C0.357655 5.34069 0 6.71272 0 8.2003C0 9.98723 0.50859 11.5941 1.52602 13.0213C2.54335 14.4486 3.85758 15.4362 5.46862 15.9843C5.65615 16.02 5.79497 15.9949 5.88523 15.9096C5.97553 15.8243 6.02062 15.7174 6.02062 15.5894C6.02062 15.5681 6.01884 15.3759 6.01537 15.0128C6.01179 14.6497 6.01012 14.333 6.01012 14.0627L5.77052 14.1052C5.61776 14.1338 5.42505 14.146 5.19239 14.1426C4.95984 14.1392 4.71843 14.1142 4.46848 14.0678C4.21841 14.0218 3.98583 13.915 3.77053 13.7477C3.55535 13.5804 3.40259 13.3614 3.31229 13.0911L3.20813 12.8454C3.1387 12.6818 3.02939 12.5001 2.88006 12.3009C2.73073 12.1015 2.57972 11.9664 2.42697 11.8952L2.35403 11.8417C2.30544 11.8061 2.26034 11.7632 2.21864 11.7135C2.17698 11.6637 2.14578 11.6139 2.12495 11.564C2.10408 11.514 2.12137 11.4731 2.17701 11.441C2.23265 11.4088 2.3332 11.3932 2.4791 11.3932L2.68735 11.4251C2.82625 11.4537 2.99805 11.5389 3.20298 11.6814C3.40781 11.8237 3.57618 12.0088 3.70814 12.2364C3.86795 12.5284 4.06047 12.7508 4.28627 12.9039C4.51189 13.057 4.73937 13.1334 4.96849 13.1334C5.19761 13.1334 5.3955 13.1156 5.56224 13.0802C5.72879 13.0446 5.88505 12.991 6.03095 12.9199C6.09345 12.4428 6.26361 12.0762 6.54129 11.82C6.14551 11.7774 5.78968 11.7132 5.47361 11.6278C5.15773 11.5423 4.83131 11.4035 4.49456 11.2111C4.15763 11.019 3.87812 10.7805 3.65597 10.4959C3.43378 10.2111 3.25144 9.83726 3.10918 9.37467C2.96686 8.91189 2.89568 8.37806 2.89568 7.77302C2.89568 6.91153 3.17004 6.17843 3.71865 5.57332C3.46166 4.92564 3.48592 4.19958 3.79151 3.3952C3.9929 3.33106 4.29156 3.37919 4.68734 3.5393C5.0832 3.69948 5.37303 3.83669 5.55713 3.95046C5.74123 4.06419 5.88873 4.16057 5.99986 4.23873C6.64582 4.05372 7.31242 3.96119 7.99985 3.96119C8.68729 3.96119 9.35404 4.05372 10 4.23873L10.3958 3.98259C10.6665 3.81167 10.9862 3.65505 11.354 3.51267C11.722 3.37036 12.0035 3.33117 12.198 3.39531C12.5104 4.19973 12.5382 4.92575 12.2812 5.57343C12.8297 6.17855 13.1042 6.91183 13.1042 7.77313C13.1042 8.37817 13.0328 8.91369 12.8907 9.38002C12.7484 9.84642 12.5645 10.2199 12.3388 10.5012C12.113 10.7825 11.8317 11.0192 11.4949 11.2113C11.1581 11.4035 10.8316 11.5422 10.5157 11.6277C10.1997 11.7132 9.84384 11.7775 9.44806 11.8202C9.80903 12.1404 9.98956 12.6458 9.98956 13.3363V15.5891C9.98956 15.7171 10.033 15.8239 10.1199 15.9093C10.2067 15.9946 10.3437 16.0197 10.5313 15.9839C12.1425 15.4359 13.4568 14.4483 14.474 13.021C15.4912 11.5938 16 9.98693 16 8.2C15.9996 6.7126 15.6418 5.34069 14.9269 4.08427Z" fill="currentColor"></path>
                </svg>
                Sign in with GitHub
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <button id="sign_in_google_btn" data-loading="false"  class="btn btn-outline-primary">
                <svg width="20" height="20" fill="none" viewBox="0 0 22 20">
                  <path fill="#4285F4" fill-rule="evenodd" d="M19.981 10.21c0-.654-.06-1.283-.172-1.886h-8.911v3.566h5.092c-.22 1.152-.886 2.128-1.888 2.782v2.313h3.058c1.79-1.605 2.821-3.968 2.821-6.776z" clip-rule="evenodd"></path>
                  <path fill="#34A853" fill-rule="evenodd" d="M10.898 19.219c2.555 0 4.696-.826 6.262-2.234l-3.058-2.313c-.847.553-1.931.88-3.204.88-2.465 0-4.55-1.621-5.295-3.8H2.442v2.388c1.557 3.013 4.757 5.079 8.456 5.079z" clip-rule="evenodd"></path>
                  <path fill="#FBBC05" fill-rule="evenodd" d="M5.603 11.752A5.414 5.414 0 015.307 10c0-.607.107-1.198.296-1.752V5.86H2.442a9.025 9.025 0 000 8.28l3.161-2.388z" clip-rule="evenodd"></path>
                  <path fill="#EA4335" fill-rule="evenodd" d="M10.898 4.448c1.389 0 2.636.465 3.617 1.378l2.714-2.644c-1.64-1.487-3.78-2.4-6.331-2.4-3.699 0-6.9 2.065-8.456 5.078l3.161 2.388c.744-2.178 2.83-3.8 5.295-3.8z" clip-rule="evenodd"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <span style="font-size: 13px">By continuing, you agree to CodeUtility <a href="https://codeutility.io/privacy">Privacy Policy</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`