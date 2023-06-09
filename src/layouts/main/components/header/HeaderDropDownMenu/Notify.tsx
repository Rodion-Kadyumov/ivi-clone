import React from 'react'
import { useTranslation } from 'react-i18next';

const Notify = () => {

    const { t } = useTranslation("header");

    return (
        <div className="headerDropdown notify">
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownNotifications">
                        <div className="dropdownNotifications__noNotification">
                            <div className="dropdownNotifications__noNotificationIcon">
                                <div
                                    className="nbl-icon nbl-icon_pull_56"
                                    style={{
                                        width: '56px',
                                            height: '56px',
                                            fontSize: '56px',
                                            lineHeight: '56px',
                                            color: 'rgb(255, 255, 255)'
                                    }}
                                ></div>
                            </div>
                            <div className="dropdownNotifications__noNotificationTitle">
                                {t("notification")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notify