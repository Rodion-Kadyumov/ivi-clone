import React from 'react'
import { useTranslation } from 'react-i18next';

const FooterQuestions: React.FC = () => {

    const { t } = useTranslation("footer");

    return (
        <ul className="iviFooter__questions">
            <li>
                <a
                    className="nbl-link nbl-link_style_baf" href="https://ask.ivi.ru/"
                    id="bottom_support_link"
                    target="_blank"
                >
                    ask.ivi.ru
                </a>
                <div className="iviFooter__description">{t("ask_")}</div>
            </li>
        </ul>
    )
}

export default FooterQuestions