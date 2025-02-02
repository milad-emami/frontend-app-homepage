import { FormattedMessage } from '@edx/frontend-platform/i18n';
import React from 'react';
import edLogo from '../../../../assets/edspirit-logo.png';
import mobileFooterLogo from '../../../../assets/mobile-footer-logo.svg';
import mobileEdxLogo from '../../../../assets/mobile-edx-logo.svg';
import edxLogo from '../../../../assets/Edx.svg';

const FooterCopyRight = () => (
  <div className="footer-copy-right-container ">
    <div className="footer-copy-right custom-container d-flex justify-content-between align-items-center ">
      <div className="d-flex align-items-center">
        <div className="logo-container mr-2">
          <img className="footer-logo" src={edLogo} alt="footer-logo" />
          <img
            className="mobile-footer-logo  h-100"
            src={mobileFooterLogo}
            alt="footer-logo"
          />
        </div>
        <p className="footer-desc">
          <FormattedMessage
            id="footer.powerdBy.text"
            defaultMessage="Powered by "
          />
          <a className="footer-desc" href="https://edspirit.com/">
            edSPIRIT
          </a>
        </p>
      </div>
      <div className="d-flex edx-wrapper">
        <div className="logo-container mr-2">
          <img
            className="mobile-footer-logo  h-100"
            src={mobileEdxLogo}
            alt="footer-logo-edx"
          />
        </div>
        <p className="footer-desc d-flex align-items-center">
          <FormattedMessage
            id="footer.copyRight.text"
            defaultMessage="edX and Open edX are trademarks of edX LLC. All Rights Reserved"
          />
          <img className="ml-2 desktop-view-edx" src={edxLogo} alt="edx" />
        </p>
      </div>
    </div>
  </div>
);

export default FooterCopyRight;
