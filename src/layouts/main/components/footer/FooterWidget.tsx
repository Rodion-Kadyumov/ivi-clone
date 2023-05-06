import React, { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next';

interface MyCustomCSS extends CSSProperties {
    '--start-gradient-color': string
    '--end-gradient-color': string
    '--shadow-color': string
}

const FooterWidget: React.FC = () => {
    const { t } = useTranslation("footer");

    return (
        <div className="iviFooter__column iviFooter__column_narrow">
            <div className="footerWidget">
                <div
                    className="footerWidget__iconSection"
                    style={{'--start-gradient-color': '#A869F0', '--end-gradient-color': '#834CC2', '--shadow-color': '#A869F0'} as MyCustomCSS}
                >
                    <div
                        className="nbl-icon nbl-icon_noAds_56"
                        style={{width: '56px', height: '56px', fontSize: '56px', lineHeight: '56px', color: '#ffffff'}}
                    ></div>
                </div>
                <div className="footerWidget__text">{t("widget")}</div>
            </div>
        </div>
    )
}

export default FooterWidget