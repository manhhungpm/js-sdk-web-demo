import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function PhanTich() {
  const headerGianLan = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            <div>
              <a className="dl-header-tag">GIAN LẬN</a>
              <a className="dl-header-tag-coming-soon ml-2">COMING SOON</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Phòng chống gian lận</p>
            <p className="dl-header-content pt-4">
              Bộ công cụ phòng chống gian lận của LinkID bao gồm nhiều công cụ khác nhau để phát hiện và ngăn chặn gian
              lận quảng cáo, IP, thiết bị... cung cấp khả năng chống gian lận theo thời gian thực
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/gianlan/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerGianLan}>
        <Head>
          <title>MMP Platform | Gian lận</title>
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
              <img src="/images/gianlan/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Phát hiện sự bất thường của người dùng</p>
              <p className="home-part-content">
                Tính năng phát hiện sự bất thường của người dùng của LinkID phân tích hành vi của người dùng để xác định
                các mẫu bất thường, chẳng hạn như số lượng nhấp chuột lớn từ một thiết bị hoặc địa chỉ IP
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
              <p className="home-part-title">Theo dõi lượt gỡ cài đặt</p>
              <p className="home-part-content">
                Tính năng theo dõi gỡ cài đặt của LinkID có thể giúp phát hiện hành vi gian lận bằng cách xác định các
                mẫu gỡ cài đặt bất thường, chẳng hạn như số lượng lớn lượt gỡ cài đặt từ cùng một thiết bị.
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/gianlan/frame2.svg" alt="doluong-frame-2"></img>
            </Col>
          </Row>

          <Row className="flex justify-center items-center pt-3">
            <Col
              {...UPPER_MD_ORDER_1_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/gianlan/frame3.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Lọc bot</p>
              <p className="home-part-content">
                Tính năng lọc bot của LinkID cho phép bạn loại trừ lưu lượng bot khỏi dữ liệu phân tích ứng dụng di động
                của bạn giúp cung cấp cho bạn bức tranh chính xác hơn về hành vi người dùng đang sử dụng ứng dụng
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
