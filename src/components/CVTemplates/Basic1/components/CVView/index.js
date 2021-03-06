import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import CvTemplateService from 'services/cv-template';

import styles from './style.module.css';
import { icons } from 'utils/icons';

export const CVView = ({ showModal, toggleShow, CvTemplate }) => {
  useEffect(() => {
    if(showModal) {
      CvTemplateService.setViewCvTemplate(CvTemplate.id).then(data => {console.log(data);});
    }
  }, [showModal]);

  return (
    <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>

      <Modal.Header closeButton>
        <Modal.Title>CV Template Basic 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className={`${styles.iframe} ${styles["cv-viewer"]}`}>
          <div className={`${styles["cv-layout-viewer"]}`}>
            <div className={`${styles["cvo-document-root"]}`}>
              <div className={`${styles["cvo-document"]} ${styles["cvo-document"]}`}>
                <div className={`${styles["cvo-page"]}`}>
                  <div className={`${styles["cvo-subpage"]}`}>
                    <div className={`${styles["cvo-body"]}`}>
                      <div className={`${styles["navigation"]}`}>
                        <div className={`${styles["nav-header"]}`}>
                          <div className={`${styles.action}`}>
                            <span className={`${styles.toggle} ${styles.close}`}></span>
                            <span className={`${styles.toggle} ${styles.hide}`}></span>
                            <span className={`${styles.toggle} ${styles["full-screen"]}`}></span>
                          </div>
                          <div className={`${styles.tabs}`}>
                            <div className={`${styles.tab} ${styles.prev}`}></div>
                            <div className={`${styles.tab} ${styles.active} ${styles["text-primary"]}`}>
                              <span>Curriculum Vitae</span>
                              {/* <i className={`${styles.custommodal}`}"fa fa-times icon text-primary" aria-hidden="true" style="float: right;"></i> */}
                            </div>
                            <div className={`${styles.tab} ${styles.next}`}></div>
                          </div>
                          <div className={`${styles["add-tab"]} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-plus" aria-hidden="true"></i></div> */}
                          </div>
                          <div className={`${styles["nav-body"]}`}>
                            <div className={`${styles.action}`}>
                              <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-angle-left" aria-hidden="true"></i> */}
                              </span>
                              <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-angle-right" aria-hidden="true"></i> */}
                              </span>
                              <span className={`${styles.reload} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-repeat" aria-hidden="true"></i> */}
                              </span>
                            </div>
                            <div className={`${styles.search} ${styles["bg-primary-trans"]}`}>
                              <div className={`${styles["input-search"]}`}>
                                <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                                </span>
                                <span className={`${styles.title}`}>
                                  Nh??n vi??n kinh doanh
                                </span>
                              </div>
                            </div>
                            <div className={`${styles["action-right"]}`}>
                              <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-microphone" aria-hidden="true"></i> */}
                              </span>
                              <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-ellipsis-v" aria-hidden="true"></i> */}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles["p-16"]} ${styles["pb-0"]} ${styles["group-header"]}`}>
                          <div className={`${styles["h-content"]}`}>
                            <div className={`${styles["top-content"]}`}>
                              <div className={`${styles["profile-item"]}  ${styles["cvo-profile-avatar-wraper"]}`}>
                                <img className={`${styles["cvo-profile-avatar"]}`} src="https://www.topcv.vn/images/default-avatar.png" value="preview_avatar" alt="avatar" />
                              </div>
                              <div className={`${styles["cvo-profile-fullname-and-title"]}`}>
                                <div className={`${styles["cvo-profile-fullname-wraper"]}`}>
                                  <span className={`${styles["text-primary"]} ${styles["cvo-profile-fullname"]}`}>Nguy???n V??n A</span>
                                </div>
                                <div className={`${styles["cvo-profile-title-wraper"]}`}>
                                  <span className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}>Nh??n vi??n kinh doanh</span>
                                </div>
                                <div className={`${styles.information}`}>
                                  <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-dob-wraper"]}`} >
                                    19/05/1992
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-phone" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-phone"]}`} >(024) 6680 5588</span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-email-wraper"]}`} >
                                    {/* <i className={`${styles.custommodal}`}"fa fa-envelope" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-email"]}`}>hotro@jobsearch.vn</span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-globe" aria-hidden="true"></i> */}
                                    {/* <span><a href="https://fb.com/jobsearch.vn" target="_blank" className={`${styles["cvo-clickable-link"]} ${styles["cvo-profile-website"]}`} rel="noreferrer noopener">https://fb.com/jobsearch.vn</a></span> */}
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-address-wraper"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-location-arrow" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-address"]}`} >
                                      S??? 10, ???????ng 10, TopCV
                                    </span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-gender-wraper"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-user" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-gender"]}`} >
                                      Nam
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles["h-description"]}`}>
                              <div className={`${styles["cvo-block"]} ${styles["cvo-objective"]}`}>
                                <div className={`${styles["cvo-block-body"]}`}>
                                  <div className={`${styles["cvo-objective-objective"]}`}>??p d???ng nh???ng kinh nghi???m v??? k??? n??ng b??n h??ng v?? s??? hi???u bi???t v??? th??? tr?????ng ????? tr??? th??nh m???t nh??n vi??n b??n h??ng chuy??n nghi???p, mang ?????n nhi???u gi?? tr??? cho kh??ch h??ng. T??? ???? gi??p C??ng ty t??ng s??? l?????ng kh??ch h??ng v?? m??? r???ng t???p kh??ch h??ng.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* cvo block left */}
                        <div className={`${styles["cvo-col-7"]}`}>
                          <div className={`${styles["group-left"]}`}>
                            <div className={`${styles["cvo-block"]} ${styles["cvo-education"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                <span className={`${styles["cvo-education-blocktitle"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-graduation-cap" aria-hidden="true"></i> */}
                                  H???c v???n
                                </span>
                              </div>
                              <div className={`${styles["cvo-block-body"]} ${styles["education-table"]}`}>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-education-school-wraper"]}`}>
                                      <span className={`${styles["cvo-education-school"]}`}>
                                        ?????i h???c Duy T??n
                                      </span>
                                    </div>
                                    <div className={`${styles["cvo-education-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-education-start"]}`}>
                                          2016-03-02</span>
                                        - <span className={`${styles["cvo-education-end"]}`}>
                                          2018-03-02
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-education-wrapper"]}`}><span className={`${styles["cvo-education-title"]}`}>
                                    Qu???n tr??? doanh nghi???p
                                    (B???ng c???p C??? Nh??n)
                                  </span></div>
                                  <div className={`${styles["cvo-education-details"]}`}>
                                    T???t nghi???p lo???i Kh??, ??i???m trung b??nh 3.1</div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles["cvo-block"]} ${styles["cvo-experience"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                <span className={`${styles["cvo-experience-blocktitle"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                                  Kinh nghi???m l??m vi???c
                                </span>
                              </div>
                              <div className={`${styles["cvo-block-body"]} ${styles["experience-table"]}`}>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                      <span className={`${styles["cvo-experience-company"]}`}>C??ng ty TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-experience-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-experience-start"]}`}>03/2015</span>
                                        -
                                        <span className={`${styles["cvo-experience-end"]}`}>Hi???n t???i</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nh??n vi??n b??n h??ng</span></div>
                                  <div className={`${styles["cvo-experience-details"]}`}>- H??? tr??? vi???t b??i qu???ng c??o s???n ph???m qua k??nh facebook, c??c forum,...<br />- Gi???i thi???u, t?? v???n s???n ph???m, gi???i ????p c??c v???n ????? th???c m???c c???a kh??ch h??ng qua ??i???n tho???i v?? email.</div>
                                </div>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                      <span className={`${styles["cvo-experience-company"]}`}>C???a h??ng TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-experience-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-experience-start"]}`}>06/2014</span>
                                        -
                                        <span className={`${styles["cvo-experience-end"]}`}>02/2015</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nh??n vi??n b??n h??ng</span></div>
                                  <div className={`${styles["cvo-experience-details"]}`}>- B??n h??ng tr???c ti???p t???i c???a h??ng cho ng?????i n?????c ngo??i v?? ng?????i Vi???t.<br />- Qu???ng b?? s???n ph???m th??ng qua c??c ???n ph???m truy???n th??ng: banner, poster, t??? r??i...<br />- L???p b??o c??o s???n l?????ng b??n ra h??ng ng??y.</div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-activity-blocktitle"]}`}>Ho???t ?????ng</span>
                              </div>
                              <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                      <span className={`${styles["cvo-activity-organization"]}`}>Nh??m t??nh nguy???n TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-activity-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-activity-start"]}`}>10/2013</span>
                                        - <span className={`${styles["cvo-activity-end"]}`}>08/2014</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>T??nh nguy???n vi??n</span></div>
                                  <div className={`${styles["cvo-activity-details"]}`}>T???p h???p c??c m??n qu?? v?? ph??n ph??t t???i ng?????i v?? gia c??.<br />- Chia s???, ?????ng vi??n h??? v?????t qua giai ??o???n kh?? kh??n, gi??p h??? c?? nh???ng suy ngh?? l???c quan.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* cvo block right */}
                        </div>
                        <div className={`${styles["cvo-col-5"]}`}>
                          <div className={`${styles["group-right"]}`}>

                            <div className={`${styles["cvo-block"]}  ${styles["cvo-skillgroup"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                <span className={`${styles["cvo-skillgroup-blocktitle"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-pencil" aria-hidden="true"></i> */}
                                  C??c k??? n??ng
                                </span>
                              </div>
                              <div className={`${styles["block-content"]}`}>
                                <div className={`${styles["skill-table"]}`}>

                                  <div className={`${styles.row}`}>
                                    <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Tin h???c v??n ph??ng TOPCV</span></div>
                                    <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- S??? d???ng th??nh th???o c??c c??ng c??? Word, Excel, Power Point</div>
                                  </div>


                                  <div className={`${styles.row}`}>
                                    <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Ti???ng Anh</span></div>
                                    <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- Kh??? n??ng giao ti???p Ti???ng Anh tr??i ch???y</div>
                                  </div>

                                </div>
                              </div>
                            </div>
                            <div className={`${styles["cvo-block"]} ${styles["cvo-award"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                <span className={`${styles["cvo-award-blocktitle"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-gift" aria-hidden="true"></i> */}
                                  Gi???i th?????ng
                                </span>
                              </div>
                              <div className={`${styles["cvo-block-body"]} ${styles["award-table"]}`}>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-award-wrapper"]}`}><span className={`${styles["cvo-award-time"]}`}>2014</span></div>
                                  <div className={`${styles["cvo-award-title"]}`}>Nh??n vi??n xu???t s???c n??m c??ng ty TOPCV</div>
                                  <div className={styles.clear}></div>
                                </div>
                              </div>
                            </div>
                            {/* <div className={`${styles["cvo-block"]} ${styles["cvo-interests"]}`}>
                                  <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                      <i className={`${styles.custommodal}`}"fa fa-heart" aria-hidden="true"></i>
                                      <span className={`${styles["cvo-interests-blocktitle"]}`}>S??? th??ch</span>
                                  </div>
                                  <div className={`${styles["block-content"]}`}>
                                      <div className={`${styles["cvo-block-body"]}`}>
                                          <span className={`${styles["cvo-interests-interests"]}`}>?????c s??ch:<br /> - M???i th??ng ?????c 1 quy???n s??ch v??? kinh doanh.<br />???? b??ng:<br /> - Tham gia ho???t ?????ng ???? b??ng c???a c??ng ty h??ng tu???n</span>
                                      </div>
                                  </div>
                              </div> */}
                          </div>
                        </div>
                        <div className={styles.clear} ></div>
                      </div>
                      <div className={styles.clear} ></div>
                      <div className={`${styles["cv-watermark"]}`}>
                        ?? jobsearchvn.vn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </Modal.Body>
      <Modal.Footer>
        {/* onClick={toggleShow}  */}
        <Button onClick={toggleShow}>Tho??t</Button>
      </Modal.Footer>

    </Modal>
  );
};
