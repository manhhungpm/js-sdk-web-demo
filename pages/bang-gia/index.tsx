import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import { Button } from "antd";
import { RightOutlined } from '@ant-design/icons';


export default function Banggia() {

    const headerBanggia = (
        <>
            <div data-aos="zoom-in" data-aos-duration="1000">
                <div className="flex justify-center items-center pt-10 md:!pt-14">
                    <p className="text-center home-header-text-1 text-[32px] md:text-[36px] lg:text-[48px]">
                        LynkiD đồng hành cùng bạn trên con đường tăng trưởng
                    </p>
                </div>
                <div className="flex justify-center items-center pt-4">
                    <p className="text-center home-header-text-2">
                        Airflex tính phí phù hợp với tốc độ tăng trưởng, bao gồm toàn bộ tính năng toàn diện dành cho đội ngũ marketing
                    </p>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Layout headerContent={headerBanggia} headerClassName="h-[22rem] md:!h-[26rem]">
                <Head>
                    <title>MMP Platform | Bảng giá</title>
                </Head>
                <Container className="md:min-w-full lg:min-w-fit">
                    <div className="flex justify-center items-center pt-10 md:!pt-20">
                        <p className="text-center  text-[32px] md:text-[36px] lg:text-[28px]">
                            Bạn vẫn chưa biết nên lựa chọn gói dịch vụ nào?
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-8">
                        <button className="home-header-button-try">
                            <a href="/lien-he">Liên hệ ngay</a>
                        </button>

                    </div>
                </Container>
            </Layout>
        </>
    )
}