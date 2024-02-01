import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function Dubao() {
  const headerDubao = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            <div>
              <a className="dl-header-tag">DỰ BÁO</a>
              <a className="dl-header-tag-coming-soon ml-2">COMING SOON</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Mang đến ý tưởng độc đáo từ những con số</p>
            <p className="dl-header-content pt-4">
              Hệ thống dữ liệu lớn, được cập nhật liên tục và đã được chúng tôi xử lý qua nhiều bộ lọc, giúp bạn tiết
              kiệm thời gian trong việc đưa ra ý tưởng cho các chiến dịch.
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/dubao/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerDubao}>
        <Head>
          <title>MMP Platform | Dự báo</title>
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
              <img src="/images/dubao/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Dự báo xu hướng</p>
              <p className="home-part-content">
                Dựa vào dữ liệu tư các nguồn khác nhau, hệ thống sẽ phân tích và dự đoán nhu cầu, xu hướng trong tương
                lai, giúp bạn có cở sở để đưa ra những hành động tiếp theo chính xác hơn.
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
              <p className="home-part-title">Cảnh báo tự động</p>
              <p className="home-part-content">
                Thiết lập thông báo tự động khi kết quả của bạn đạt ngưỡng tốt/xấu, giúp bạn kịp thời phát hiện vấn đề
                và đưa ra phương án tối ưu nhanh nhất, từ đó đạt được hiệu suất chiến dịch cao nhất.
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/dubao/frame2.svg" alt="doluong-frame-2"></img>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
