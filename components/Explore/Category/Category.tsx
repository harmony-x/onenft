import CurveRectangle from "$components/App/CurveRectangle/CurveRectangle";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  Catgegory,
  CatgegoryInner,
  StyledCategoryContainer,
} from "./Category.styles";

const Category = () => {
  return (
    <StyledCategoryContainer>
      <HeadingTwo mb="20px">Browse by Category 📚</HeadingTwo>
      <Row gutter={{ md: 24, lg: 32 }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col key={item} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Catgegory>
              <CatgegoryInner>
                <Image
                  objectFit="cover"
                  alt=""
                  src="/primate.png"
                  layout="fill"
                />
              </CatgegoryInner>
              <CurveRectangle text="Art" />
            </Catgegory>
          </Col>
        ))}
      </Row>
    </StyledCategoryContainer>
  );
};

export default Category;
