import { Col, Form, Input, Row } from "antd";
import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Post from "../interfaces/post";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../lib/constants";
import { useEffect } from "react";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const [form] = Form.useForm();

  const downloadApp = () => {
    (window as any).AirflexJS.logEvent("web_demo_download_app");
  };

  const registerData = () => {
    (window as any).AirflexJS.logEvent("web_demo_register_data");
  };

  const bannerClick = () => {
    (window as any).AirflexJS.logEvent("web_demo_click_banner");
  };

  const headerHome = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex justify-center items-center pt-6 md:!pt-14">
          <p className="text-center home-header-text-1 text-[32px] md:text-[36px] lg:text-[48px]">
            odio pellentesque diam volutpat commodo sed egestas egestas
          </p>
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="text-center home-header-text-2">
            odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien nec sagittis aliquam
          </p>
        </div>
        <div className="flex justify-center items-center pt-10">
          <div className="pr-4" style={{ fontFamily: "SVN-Gilroy" }}>
            <button className="home-header-button-readmore" onClick={downloadApp}>
              Tải app
            </button>
          </div>
          <div style={{ fontFamily: "SVN-Gilroy" }}>
            <button className="home-header-button-try" onClick={registerData}>
              Đăng ký gói cước
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12">
          <a href="http://google.com">
            <img src="/images/home/header.svg" alt="img-header-home" onClick={bannerClick}></img>
          </a>
        </div>
      </div>
    </>
  );

  const onFinish = (values: any) => {
    (window as any).AirflexJS.logEvent("web_demo_input_code", values);
  };

  return (
    <>
      <Layout headerContent={headerHome}>
        <Head>
          <title>MMP Platform</title>
        </Head>
        <Container>
          <Row className="flex justify-center items-center md:pt-96 sm:pt-3">
            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Gia tăng hiệu quả kinh doanh</p>
              <p className="home-part-content">
                Thông qua tính năng đo lường và phân tích dữ liệu chính xác theo thời gian thực, bạn có thể nhanh chóng
                đưa ra các quyết định liên quan đến chiến dịch Marketing gia tăng kết quả đạt được.
              </p>
              <a className="home-part-readmore" href="#">
                Xem thêm
              </a>
              <Form form={form} onFinish={onFinish} style={{ maxWidth: 600 }}>
                <Form.Item name="code" label="Code">
                  <Input />
                </Form.Item>
                <button type="submit" className="footer-button-submit">
                  Áp dụng
                </button>
              </Form>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/home/frame1.svg" alt="home-frame-1"></img>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
