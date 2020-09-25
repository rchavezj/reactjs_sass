import tw, { styled } from 'twin.macro';


const baseStyle = styled.div`
    ${tw`
        h-152
        w-full
        left-0
    `}
`;


const side = styled.div`
    ${baseStyle}
    ${tw`
        top-0
        left-0
        w-full
        absolute
        rounded-md_sm
        transition-all duration-75 ease-linear
    `}
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

    &--front {
        background-color: $color-white;
    }

    &--back {
        transform: rotateY(180deg);

        &-1 {
            background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);
        }

        &-2 {
            background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
        }

        &-3 {
            background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark);
        }
    }
`;


export const Card = {

}