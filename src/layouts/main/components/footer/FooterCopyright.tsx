import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterCopyright: React.FC = () => {
    const { t } = useTranslation("footer");
    
    return (
        <div className="iviFooter__copyrights">
            <div className="iviFooter__copyrightsSite">
                <span>©&nbsp;</span><span>2023</span><span>&nbsp;ООО {t("copyright")}</span>
            </div>
            <div className="iviFooter__copyrightsContent">
                HBO ® and related service marks are the
                property of
                Home Box Office, Inc
            </div>
        </div>
    )
}

export default FooterCopyright