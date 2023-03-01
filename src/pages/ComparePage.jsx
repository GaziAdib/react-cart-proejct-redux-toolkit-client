import React from 'react'

const ComparePage = () => {
    return (
        <>

            <h2>Product Comparison Table V2</h2>
            <div class="zui-wrapper">
                <div class="instruction">
                    <em><i class="fas fa-arrows-alt-h"></i> Swipe for more products</em>
                </div>
                <div id="container" class="zui-scroller">
                    <table class="zui-table">
                        <thead>
                            <tr>
                                <th class="zui-sticky-col">&nbsp;</th>
                                <th id="product-col" class="table-col">
                                    <img class="product-img" src="https://scv10mr-cdnpre-p-cus-00.azureedge.net/-/media/images/promega-worldwide/global/templates/product-comparison-page/maxwell-rscinstrument.jpg?rev=f5c81f5d6b0e4ad08583aaa2e42b9ce3&amp;sc_lang=en" />
                                    <h5>
                                        <a href="#" class="product-link">Maxwell<sup>&reg;</sup> RSC
                                            <span>&#187;</span>
                                        </a>
                                    </h5>
                                </th>
                                <th class="table-col">
                                    <img class="product-img" src="https://scv10mr-cdnpre-p-cus-00.azureedge.net/-/media/images/promega-worldwide/europe/promega-germany/lp/1908-maxwell-demo/de-1908-maxwell-rsc48-blank.jpg?rev=11270ae5b13f4aca82c1a22a0fa43d34&sc_lang=en" />
                                    <h5>
                                        <a href="#" class="product-link">Maxwell<sup>&reg;</sup> RSC 48
                                            <span>&#187;</span>
                                        </a>
                                    </h5>
                                </th>
                                <th class="table-col">
                                    <img class="product-img" src="https://scv10mr-cdnpre-p-cus-00.azureedge.net/-/media/images/promega-worldwide/global/templates/product-comparison-page/maxwell-cscinstrument.jpg?rev=98b8a176d8834e96a582e2b987667794&sc_lang=en" />
                                    <h5>
                                        <a href="#" class="product-link">
                                            Maxwell<sup>&reg;</sup> CSC<span>&#187;</span>
                                        </a>
                                    </h5>
                                </th>
                                <th class="table-col">
                                    <img class="product-img" src="https://scv10mr-cdnpre-p-cus-00.azureedge.net/-/media/images/promega-worldwide/global/templates/product-comparison-page/maxwell-fscinstrument.jpg?rev=590466656dba4476aa38f989038d904b&sc_lang=en" />
                                    <h5>
                                        <a href="#" class="product-link">
                                            Maxwell<sup>&reg;</sup> FSC
                                            <span>&#187;</span>
                                        </a>
                                    </h5>
                                </th>
                                <th class="table-col">
                                    <img class="product-img" src="https://scv10mr-cdnpre-p-cus-00.azureedge.net/-/media/images/promega-worldwide/global/templates/product-comparison-page/maxwell-fscinstrument.jpg?rev=590466656dba4476aa38f989038d904b&sc_lang=en" />
                                    <h5>
                                        <a href="#" class="product-link">Maxwell ABC</a></h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="zui-sticky-col">Application</td>
                                <td><strong>For Research Use</strong></td>
                                <td><strong>For Research Use (higher throughput)</strong></td>
                                <td><strong>For IVD use</strong></td>
                                <td><strong>For Forensic Use</strong></td>
                                <td><strong>For Testing Use</strong></td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col zui-stripe-row">Catalog Number</td>
                                <td>AS4500</td>
                                <td>AS8500</td>
                                <td>AS6000</td>
                                <td>AS4600</td>
                                <td>AS1000</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col">Throughput</td>
                                <td>up to 16 samples</td>
                                <td>up to 48 samples</td>
                                <td>up to 16 samples</td>
                                <td>up to 16 samples</td>
                                <td>up to 32 samples</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col zui-stripe-row">
                                    <a href="#" class="product-link">Quantus<sup>&trade;</sup> Flurometer</a> (for quantification)
                                </td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-plus-circle"></i>Optional</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col">Bar Code Reader</td>
                                <td><i class="far fa-plus-circle"></i>Optional</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col zui-stripe-row">Tablet PC</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col">UV-Light (for decontamination)</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col zui-stripe-row">Vision System (reduces the possibility of user errors)</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col">Compatible with MaxPrep<sup>&trade;</sup> Liquid Handler</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-times-circle"></i>Not Available</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                                <td><i class="far fa-check-circle"></i>Included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}

export default ComparePage