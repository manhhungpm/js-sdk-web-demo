import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function CaNhanHoa() {
  const headerCanhanhoa = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            <div>
              <a className="dl-header-tag">CÁ NHÂN HOÁ</a>
              <a className="dl-header-tag-coming-soon ml-2">COMING SOON</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">Cá nhân hóa và xây dựng trải nghiệm khách hàng</p>
            <p className="dl-header-content pt-4">
              Thông qua việc thu thập, phân tích dữ liệu đa nền tảng LinkID sẽ giúp bạn xây dựng các trải nghiệm cá nhân
              hóa cho người dùng liên tục theo thời gian thực
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/canhanhoa/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerCanhanhoa}>
        <Head>
          <title>MMP Platform | Cá nhân hoá</title>
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
              <img src="/images/canhanhoa/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className=""
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Thu thập dữ liệu khách hàng</p>
              <p className="home-part-content">
                LinkID sẽ thu thập dữ liệu trên mọi điểm chạm của khách hàng để xây dựng hồ sơ định danh dành cho từng
                khách hàng
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
              <p className="home-part-title">Phân tích và dự đoán</p>
              <p className="home-part-content">
                Dựa trên dữ liệu khách hàng, LinkID sẽ đưa ra phân tích và dự đoán với các hành vi để đưa ra các dự đoán
                về hành vi tiếp theo trong quá trình sử dụng của người dùng
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/canhanhoa/frame2.svg" alt="doluong-frame-2"></img>
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
              <img src="/images/canhanhoa/frame3.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Cá nhân hóa trải nghiệm</p>
              <p className="home-part-content">
                Liên tục đưa ra các trải nghiệm cá nhân hóa dựa trên các dữ liệu đã được thu thập, phân tích trong thời
                gian nhanh nhất đảm bảo các trải nghiệm khách hàng nhất quán và liền mạch
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
