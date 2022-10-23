import CurveRectangle from "$components/App/CurveRectangle/CurveRectangle";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { categories } from "$utils/data";
import { toTitleCase } from "$utils/functions";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
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
        {categories.map(({ image, name }, i) => (
          <Col key={i} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Catgegory>
              <Link href={`/categories?categoryParam=${name}`}>
                <CatgegoryInner>
                  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
                    objectFit="cover"
                    alt=""
                    src={image}
                    layout="fill"
                  />
                </CatgegoryInner>
              </Link>
              <CurveRectangle text={toTitleCase(`${name}`)} />
            </Catgegory>
          </Col>
        ))}
      </Row>
    </StyledCategoryContainer>
  );
};

export default Category;
