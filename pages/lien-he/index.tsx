import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import { Card, Col, Row } from "antd";
import { CONTACTS } from "../../lib/constants";
import { ICON_ARROW_RIGHT } from "../../lib/svgs";

export default function Lienhe() {
  const headerLienhe = (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex justify-center items-center pt-10 md:!pt-14">
          <p className="text-center home-header-text-1 text-[32px] md:text-[36px] lg:text-[48px]">Liên hệ với LynkiD</p>
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="text-center home-header-text-2">
            Bạn đang gặp khó khăn cần được hỗ trợ, hợp tác đối tác hay cần đóng góp ý kiến cho bộ phận khách hàng? Hãy
            liên hệ với LynkiD qua bộ phận chăm sóc khách hàng. LynkiD sẽ giải quyết vấn đề của bạn trong thời gian sớm
            nhất!
          </p>
        </div>
      </div>
    </>
  );

  const handleContact = (key: string, info: string) => {
    if (key === "fb") window.open(info.includes("http") ? info : `https://${info}`, "_blank");
    else if (key === "mail") window.location.href = `mailto:${info}`;
  };

  return (
    <>
      <Layout headerContent={headerLienhe} headerClassName="h-[22rem] md:!h-[26rem]">
        <Head>
          <title>MMP Platform | Liên hệ</title>
        </Head>
        <Container className="md:min-w-full lg:min-w-fit">
          <div className="py-8">
            <Row gutter={32}>
              {CONTACTS.map((e) => (
                <Col key={e.key} xs={24} md={12} lg={8} className="h-full">
                  <Card bordered={false} className="p-1 mb-7 text-center md:!text-left !shadow-2xl">
                    <div className="mb-4 md:!mb-8 flex justify-center md:!justify-start">
                      <img src={e.icon} />
                    </div>
                    <h5 className="mb-3 md:!mb-5 text-[#333333] font-bold text-base md:!text-2xl">{e.title}</h5>
                    <p className="mb-2 md:!mb-10 text-[#8a94a6] text-sm md:!text-base">{e.info}</p>
                    <div
                      className="flex items-center justify-center md:!justify-start text-main"
                      style={{ cursor: e.hasLinkIcon ? "pointer" : "" }}
                    >
                      <span className="text-sm font-medium md:!text-xl" onClick={() => handleContact(e.key, e.info)}>
                        {e.textLink}
                      </span>
                      {e.hasLinkIcon && (
                        <span className="ml-1 md:!ml-4 flex items-center justify-center w-3 h-3 md:!w-5 md:!h-5 overflow-hidden">
                          {ICON_ARROW_RIGHT}
                        </span>
                      )}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Layout>
    </>
  );
}
