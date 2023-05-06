import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMainBanner } from '../../../../models/Movie'

type TProps = {
    data: IMainBanner
}

const MainSliderCard: React.FC<TProps> = ({ data }) => {

    const { id, banner, title, desc, link } = data
    const { t } = useTranslation("slider");
    return (
        <div
            className={`ivi-carousel-item ${'.slick-center' ? 'isActive' : ''}`}
        >
            <div>
                    <div className="promoSlider__item promoSlider__item_version_2" data-promoid={id}>
                        <div className="promoSlider__itemContent">
                            <div className="nbl-stub nbl-stub_style_rodi promoSlider__nbl-stub"></div>
                            <img
                                alt={title}
                                className="promoSlider__bgImage promoSlider__bgImage_wide"
                                data-stub="false"
                                src={banner.wide}
                            />
                            <img
                                alt={title}
                                className="promoSlider__bgImage promoSlider__bgImage_narrow"
                                data-stub="false"
                                src={banner.narrow}
                            />
                            <a
                                className="promoSlider__link"
                                href={link}
                                target="_self"
                            >
                                <div className="promoSlider__contentContainer">
                                    <div className="promoSlider__logoContainer">
                                        <img
                                            alt={title}
                                            className="promoSlider__logo"
                                            data-stub="false"
                                            src={banner.logo}
                                        />
                                    </div>
                                    <div className="promoSlider__synopsis" style={{color: 'rgb(255, 255, 255)'}}>
                                        {desc}
                                    </div>
                                </div>
                                <div className="promoSlider__contentButtons">
                                    <div
                                        className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0 promoSlider__nbl-button"
                                        style={{
                                            display: 'flex',
                                            textAlign: 'start',
                                            width: '170px'
                                        }}
                                        title="Смотреть по подписке"
                                    >
                                        <div className="nbl-button__primaryText">{t("text")}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MainSliderCard