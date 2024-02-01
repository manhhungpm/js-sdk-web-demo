import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function Phankhuc() {
  const headerPhankhuc = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            <div>
              <a className="dl-header-tag">PHÂN KHÚC KHÁCH HÀNG</a>
              <a className="dl-header-tag-coming-soon ml-2">COMING SOON</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Phân khúc đối tượng khách hàng</p>
            <p className="dl-header-content pt-4">
              Tính năng phân khúc đối tượng khách hàng cho phép bạn nhóm các người dùng dựa trên các tiêu chí cụ thể như
              nhân khẩu học, hành vi, hoặc sở thích để bạn có thể tạo chiến dịch tương tác cho từng phân khúc nhằm tăng
              tỉ lệ tương tác và chuyển đổi.
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/phankhuc/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerPhankhuc}>
        <Head>
          <title>MMP Platform | Phân khúc khách hàng</title>
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
              <img src="/images/phankhuc/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Đối tượng tương tự</p>
              <p className="home-part-content">
                Tính năng đối tượng tương tự sẽ cho phép bạn tạo đối tượng khách hàng mới giống với đối tượng khách hàng
                hiện tại để mở rộng phạm vi tiếp cận và nhắm đến những người dùng có nhiều khả năng quan tâm đến ứng
                dụng của bạn nhất có thể
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
              <p className="home-part-title">Re-Targeting</p>
              <p className="home-part-content">
                Đó là tính năng cho phép bạn tạo các chiến dịch hướng đến đối tượng đã cài ứng dụng nhưng chưa thực hiện
                các hành vi tương tác sâu bên trong ứng dụng của bạn như mua hàng...
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/phankhuc/frame2.svg" alt="doluong-frame-2"></img>
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
              <img src="/images/phankhuc/frame3.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Loại trừ đối tượng</p>
              <p className="home-part-content">
                Việc loại trừ các đối có hành vi hack, cheat hoặc các đối tượng đã mua hàng khỏi các chiến dịch dựa trên
                các tiêu chí cụ thể sẽ giúp bạn tiết kiệm được chi phí và đảm bảo kết quả của các chiến dịch
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
