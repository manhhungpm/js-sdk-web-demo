import Container from "../container";
import { EXAMPLE_PATH } from "../../lib/constants";
import { Button, Col, Divider, Form, Input, Row } from "antd";

const { Item } = Form;
const Footer = () => {
  const [form] = Form.useForm();

  const clickSubmitButton = (form) => {
    (window as any).AirflexJS.logEvent("web_demo_form_feedback", form);
  };

  return (
    <div>
      <footer className="footer-banner">
        <Container>
          <div className="pt-20 pb-8 flex justify-center items-center">
            <p className="text-center footer-text-survey">
              Bạn có thắc mắc hay cần sử dụng trực tiếp sản phẩm? Liên hệ ngay với chúng tôi để được đáp ứng nhu cầu
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="footer-bg-form-survey">
              <Form layout="vertical" className="pt-8 px-8" form={form} onFinish={clickSubmitButton}>
                <Item name={"name"}>
                  <Input placeholder={"Họ và tên"} className="footer-input-survey"></Input>
                </Item>

                <Row>
                  <Col span={11}>
                    <Item name={"email"}>
                      <Input placeholder="Email" className="footer-input-survey"></Input>
                    </Item>
                  </Col>
                  <Col span={12} offset={1}>
                    <Item name={"phone_number"}>
                      <Input placeholder="Số điện thoại" className="footer-input-survey"></Input>
                    </Item>
                  </Col>
                </Row>

                <Item name={"description"}>
                  <Input.TextArea rows={4} placeholder="Nội dung" className="footer-text-area-survey"></Input.TextArea>
                </Item>

                <div className="flex flex-col items-center" style={{ fontFamily: "SVN-Gilroy" }}>
                  <button type="submit" className="footer-button-submit">
                    Gửi Ngay
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </footer>

      <div className="flex flex-col justify-center items-center">
        <div className="pt-20">
          <img src="/images/logo-linkid-border.svg" alt="logo-border"></img>
        </div>

        <div className="pt-4">
          <p>Công ty Cổ phần Dịch vụ và Công nghệ LINKID</p>
        </div>

        <div className="pt-8" style={{ width: "90%" }}>
          <Row className="flex justify-evenly">
            <Col
              xs={24}
              sm={24}
              md={7}
              lg={7}
              xl={7}
              className="footer-box-info flex justify-center items-center"
              style={{ fontFamily: "SVN-Gilroy" }}
            >
              <div>
                <img src="/images/icon-location.svg" width={40} />
              </div>
              <div className="footer-text-info">
                Phòng 509, Tầng 5 Số 362 Phố Huế, P. Phố Huế, Q. Hai Bà Trưng, Tp. Hà Nội
              </div>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={7}
              lg={7}
              xl={7}
              className="footer-box-info flex justify-center items-center"
              style={{ fontFamily: "SVN-Gilroy" }}
            >
              <div>
                <img src="/images/icon-call.svg" width={20} height={20} />
              </div>
              <div className="footer-text-info">1900 6368 35</div>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={7}
              lg={7}
              xl={7}
              className="footer-box-info flex justify-center items-center"
              style={{ fontFamily: "SVN-Gilroy" }}
            >
              <div>
                <img src="/images/icon-sms.svg" width={20} height={20} />
              </div>
              <div className="footer-text-info">support@linkid.vn</div>
            </Col>
          </Row>
        </div>

        <div className="pt-12" style={{ width: "100%" }}>
          <Divider />
        </div>

        <div className="pb-7">
          <p>Copyright © 2022. Thiết kế và phát triển bởi LynkID.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;