import { BaseFormLegend, BaseInput, BaseButton, BaseFormCard } from "../UI";

const NewAnimal = () => {
    return (
        <BaseFormCard>
            <BaseFormLegend>Novo Animal</BaseFormLegend>
            <BaseInput sizeW={`100%`} type="text" placeholder="Apelido" />
            <BaseInput
                sizeW={`100%`}
                type="text"
                placeholder="Nome científico"
            />
            <BaseInput
                sizeW={`100%`}
                type="text"
                placeholder="Ala do Zoológico"
            />
            <BaseInput
                sizeW={`100%`}
                type="password"
                placeholder="Confirmar senha"
            />
            <input type="file" />
            <BaseButton type="submit">
                Cadastrar
            </BaseButton>
        </BaseFormCard>
    );
};

export default NewAnimal;
