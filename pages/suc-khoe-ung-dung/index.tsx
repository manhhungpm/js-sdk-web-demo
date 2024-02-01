import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function Suckhoeungdung() {
  const headerSuckhoeungdung = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            <div>
              <a className="dl-header-tag">SỨC KHOẺ MOBILE & WEB</a>
              <a className="dl-header-tag-coming-soon ml-2">COMING SOON</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Bản đồ nhiệt</p>
            <p className="dl-header-content pt-4">
              Tính năng bản đồ nhiệt cho phép bạn trực quan hóa hành vi của người dùng trong ứng dụng của bạn, xác định
              được vị trí thu hút và ít thu hút của ứng dụng giúp bạn tối ưu hóa trải nghiệm người dùng
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/suckhoeungdung/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerSuckhoeungdung}>
        <Head>
          <title>MMP Platform | Sức khoẻ ứng dụng</title>
        </Head>
        <Container>
          <Row className="flex justify-center items-center pt-3">
            <Col
              {...UPPER_MD_ORDER_1_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/suckhoeungdung/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Ghi lại phiên truy cập</p>
              <p className="home-part-content">
                Tính năng ghi lại phiên truy cập cho phép phép bạn ghi lại các phiên truy cập của người dùng trong ứng
                dụng cung cấp bản trình bày trực quan về hành vi của người dùng để xem cách tương tác của người dùng và
                đưa ra phương pháp tối ưu nếu cần.
              </p>
            </Col>
          </Row>

          <Row className="flex justify-center items-center pt-3">
            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Theo dõi hành trình người dùng</p>
              <p className="home-part-content">
                LinkID cho phép bạn theo dõi hành trình của người dùng trong ứng dụng dành cho thiết bị di động của
                mình, từ lượt truy cập đầu tiên đến chuyển đổi giúp bạn tối ưu hóa trải nghiệm người dùng và tăng tỷ lệ
                chuyển đổi.
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/suckhoeungdung/frame2.svg" alt="doluong-frame-2"></img>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
