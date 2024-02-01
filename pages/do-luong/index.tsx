import { Col, Row } from "antd";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { MAIN_LAYOUT_COL, UPPER_MD_ORDER_1_COL, UPPER_MD_ORDER_2_COL } from "../../lib/constants";

export default function DoLuong() {
  const headerDoLuong = (
    <>
      {/* <Row className="flex justify-center items-center pt-14">
                <Col {...MAIN_LAYOUT_COL} className="md:px-16" style={{ fontFamily: 'SVN-Gilroy' }}>
                    <div>
                        <a className="dl-header-tag">
                            ĐO LƯỜNG
                        </a>
                    </div>

                    <p className="dl-header-title md:text-5xl text-3xl lg:text-center text-left pt-4">Đo lường đa kênh, đa nền tảng chính xác trên một phần mềm</p>

                    <p className="dl-header-content pt-4">Bộ công cụ đo lường thống kê các chỉ số từ nhiều kênh tại nhiều nền tảng khác nhau ngay
                        trên một màn hình, giúp bạn dễ dàng theo dõi và tối ưu chiến dịch.</p>

                    <p className="dl-header-content pt-2"><span className="text-[#FFA800]">Kênh:</span>  Facebook, TikTok, Google, Email, SMS,... các kênh Offline</p>
                    <p className="dl-header-content pt-2"><span className="text-[#FFA800]">Nền tảng:</span>  Mobile (iOS và Android), Web, CTV</p>
                    <div className="pt-10">
                        <button className="home-header-button-try">Dùng thử ngay</button>
                    </div>
                </Col>
                <Col {...MAIN_LAYOUT_COL} className="md:px-16" >
                    <img src="/images/doluong/header.svg" alt="doluong-header" ></img>
                </Col>
            </Row> */}

      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:items-start pt-4">
          <div className="md:text-center text-left sm:w-1/2 md:w-1/3">
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Responsive Heading</h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus elit nec enim viverra, ac lacinia mauris convallis.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button> */}
            <div>
              <a className="dl-header-tag">ĐO LƯỜNG</a>
            </div>
            <p className="dl-header-title md:text-5xl text-3xl pt-4">
              Đo lường đa kênh, đa nền tảng chính xác trên một phần mềm
            </p>
            <p className="dl-header-content pt-4">
              Bộ công cụ đo lường thống kê các chỉ số từ nhiều kênh tại nhiều nền tảng khác nhau ngay trên một màn hình,
              giúp bạn dễ dàng theo dõi và tối ưu chiến dịch.
            </p>
            <p className="dl-header-content pt-2">
              <span className="text-[#FFA800]">Kênh:</span> Facebook, TikTok, Google, Email, SMS,... các kênh Offline
            </p>
            <p className="dl-header-content pt-2">
              <span className="text-[#FFA800]">Nền tảng:</span> Mobile (iOS và Android), Web, CTV
            </p>
            <div className="pt-10">
              <button className="home-header-button-try">Dùng thử ngay</button>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <img src="/images/doluong/header.svg" alt="Placeholder image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Layout headerContent={headerDoLuong}>
        <Head>
          <title>MMP Platform | Đo lường</title>
        </Head>
        <Container>
          <Row className="flex justify-center items-center pt-3">
            {/* <Col {...MAIN_LAYOUT_COL} className="md:px-16"> */}
            <Col
              {...UPPER_MD_ORDER_1_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/doluong/frame1.svg" alt="doluong-frame-1"></img>
            </Col>

            <Col
              className="md:px-16"
              {...UPPER_MD_ORDER_2_COL}
              style={{ fontFamily: "SVN-Gilroy" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="home-part-title">Kiểm soát hiệu quả chiến dịch, tối ưu nguồn lực</p>
              <p className="home-part-content">
                Dữ liệu từ đa kênh, đa nền tảng được cập nhật realtime ngay trên một màn hình, giúp bạn dễ dàng tối ưu
                hiệu suất chiến dịch, mang lại kết quả cao nhất với chi phí thấp nhất.
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
              <p className="home-part-title">Báo cáo chính xác và được thiết lập theo cách của bạn</p>
              <p className="home-part-content">
                Tổng hợp báo cáo tổng quan và chi tiết từ các nguồn khác nhau giúp bạn nắm được bức tranh toàn cảnh. Bạn
                có thể thiết lập báo cáo theo những gì bạn muốn bằng việc dễ dàng thêm hoặc bỏ các chỉ số, sắp xếp bố
                cục các cột,...
              </p>
            </Col>

            <Col
              {...MAIN_LAYOUT_COL}
              className="md:px-16"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src="/images/doluong/frame2.svg" alt="doluong-frame-2"></img>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
