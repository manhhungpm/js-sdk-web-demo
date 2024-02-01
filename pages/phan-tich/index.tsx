import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function PhanTich() {
  const headerPhanTich = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Responsive Heading</h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus elit nec enim viverra, ac lacinia mauris convallis.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button> */}
            <div>
              <a className="dl-header-tag">PHÂN TÍCH</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Phân tích ứng dụng liên tục theo thời gian thực</p>
            <p className="dl-header-content pt-4">
              Phân tích ứng dụng để theo thời gian thực để có khả năng hiển thị ngay lập tức các chỉ số hiệu suất chính
              nhằm đưa ra các quyết định chính xác trong thời điểm đó hướng tới thành công.
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/phantich/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerPhanTich}>
        <Head>
          <title>MMP Platform | Phân tích</title>
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
              <img src="/images/phantich/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Xây dựng báo cáo tùy chỉnh</p>
              <p className="home-part-content">
                Xây dựng chế độ xem đầy đủ và chính xác về tất cả hiệu suất chiến dịch của bạn trong một trang tổng quan
                và có thể tùy chỉnh phù hợp với dự án của bạn
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
              <p className="home-part-title">Trực quan hóa dữ liệu</p>
              <p className="home-part-content">
                Dữ liệu của bạn sẽ được trực quan hóa bằng các biểu đồ, đồ thị để bạn có thể dễ dàng nhận biết sự thay
                đổi theo thời gian
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/phantich/frame2.svg" alt="doluong-frame-2"></img>
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
              <img src="/images/phantich/frame3.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Tạo bộ lọc linh hoạt</p>
              <p className="home-part-content">
                Bộ lọc mạnh mẽ sẽ lọc bất cứ thuộc tính nào bạn cần về vị trí địa lý, khách hàng, thiết bị ... nhằm hỗ
                trợ việc đưa ra quyết định một cách chính xác nhất
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
