import React from 'react'
import { useTranslation } from 'react-i18next';

const HeaderSearch: React.FC = () => {
    const { t } = useTranslation("header");

    return (
        <div className="headerTop__headerSearch">
            <button
                data-test="header_search"
                className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_sairo nbl-button_size_stryker nbl-button_hasBadge_0"
            >
                <div className="nbl-button__primaryText">
                    <div className="nbl-icon nbl-icon_search_16 nbl-button__nbl-icon"></div>
                    {t("search")}
                </div>
            </button>
        </div>
    )
}

export default HeaderSearch