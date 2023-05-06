import React from 'react'
import { useTranslation } from "react-i18next";

import { ButtonLink } from '../../../../components'
import FooterCopyright from './FooterCopyright'

const FooterStores: React.FC = () => {

    const { t } = useTranslation("footer");

    return (
        <div className="iviFooter__column iviFooter__column_wide">
            <div className="iviFooter__stores">
                <ButtonLink
                    title={'App Store'}
                    subTitle={t("appstore") ?? ""}
                    icon={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg'}
                    link={'https://go.onelink.me/app/devicesiOS'}
                />
                <ButtonLink
                    title={'Google Play'}
                    subTitle={t("google") ?? ""}
                    icon={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg'}
                    link={'https://go.onelink.me/app/devicesAndroid'}
                />
                <ButtonLink
                    title={'Smart TV'}
                    subTitle={t("smarttv") ?? ""}
                    icon={'nbl-icon_smartTvPromo_20'}
                    link={'https://www.ivi.ru/pages/tvsmart'}
                />
                <ButtonLink
                    title={t("devices") ?? ""}
                    addClass={'allDevices'}
                    link={'https://www.ivi.ru/devices'}
                    icon={'nbl-icon_anyDev_20'}
                />
            </div>
            <FooterCopyright />
        </div>
    )
}

export default FooterStores