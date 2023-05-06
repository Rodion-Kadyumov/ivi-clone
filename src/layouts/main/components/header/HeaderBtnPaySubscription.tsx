import React from 'react'
import { useTranslation } from 'react-i18next';

const HeaderBtnPaySubscription: React.FC = () => {
    const { t } = useTranslation("header");
    
    return (
        <div
            className="headerTop__additionalButton headerTop__additionalButton_isAbTest headerTop__additionalButton_hasGradient"
            data-test="header_subscription_button"
        >
            <div
                className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_hasBadge_0">
                <div className="nbl-button__primaryText">{t("subscribtion")}</div>
            </div>
        </div>
    )
}

export default HeaderBtnPaySubscription