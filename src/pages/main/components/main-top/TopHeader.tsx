import React from 'react'
import { useTranslation } from 'react-i18next';

const TopHeader: React.FC = () => {
    const { t } = useTranslation("main-seo");

    return (
        <div className="gallery__blockHeader">
            <div className="gallery__imageHeader">
                <img
                    className="nbl-picture"
                    src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
                    alt={'TOP-10'}
                />
                <span>{t("top.week")}</span>
            </div>
        </div>
    )
}

export default TopHeader