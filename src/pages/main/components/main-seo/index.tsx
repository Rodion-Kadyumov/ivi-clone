import React from 'react'
import { useTranslation } from 'react-i18next';

const MainSeo: React.FC = () => {
    const { t } = useTranslation("main-seo");

    return (
        <section className="pageSection home__pageSection" data-test="seoBlock">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="clause clause_is-native home__clause">
                        <div className="clause__header">
                            <h2 className="clause__title">
                                {t("details.title")}
                            </h2>
                        </div>
                        <div className="clause__text is-truncated">
                            <div className="clause__text-inner hidden-children"><p>{t("details.description")}</p>
                                <p>{t("details.ivi")}</p>
                                <ol>
                                    <li>{t("details.list.0")}
                                    </li>
                                    <li>{t("details.list.1")}
                                    </li>
                                    <li>{t("details.list.2")}
                                    </li>
                                    <li>{t("details.list.3")}
                                    </li>
                                    <li>{t("details.list.4")}
                                    </li>
                                    <li>{t("details.list.5")}
                                    </li>
                                    <li>{t("details.list.6")}
                                    </li>
                                    <li>{t("details.list.7")}</li>
                                </ol>
                                <p>{t("details.promo")}</p>
                            </div>
                            <span className="clause__toggle">Развернуть</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSeo