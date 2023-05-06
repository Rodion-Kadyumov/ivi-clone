import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonLink } from '../../../../components'
import FooterQuestions from './FooterQuestions'

const FooterSupport = () => {

    const [phone, setPhone] = useState<boolean>(false);
    const { t } = useTranslation("footer");

    return (
        <div className="iviFooter__column iviFooter__column_narrow">
            <span className="iviFooter__title">{t("support.title")}</span>
            <div className="iviFooter__description">
                <span>{t("support.text")}</span>
                <span>{t("support.operators")}</span>
            </div>
            <div className="iviFooter__support">
                <ButtonLink
                    title={t("chat") ?? ""}
                    link={'https://www.ivi.ru/profile'}
                    addClass={'chatButton'}
                />
                <div className="iviFooter__supportButtons">
                    <ButtonLink
                        link={'mailto:support@ivi.ru'}
                        icon={'nbl-icon_email_16'}
                    />
                    <ButtonLink
                        handlerClick={() => setPhone(prevState => !prevState)}
                        icon={'nbl-icon_call_16'}
                    />
                </div>
                <div className={`iviFooter__supportPhones ${phone ? 'showed' : ''}`} id="supportPhonesList">
                    <a
                        className="iviFooter__phoneItem"
                        href="tel:+78612176920"
                        rel="nofollow"
                    >
                        <div className="iviFooter__phoneNumber">+7 861 217-69-20</div>
                        <div className="iviFooter__description"></div>
                    </a>
                </div>
                <FooterQuestions />
            </div>
        </div>
    )
}

export default FooterSupport