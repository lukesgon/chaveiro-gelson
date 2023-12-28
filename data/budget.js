class Budget {
    constructor(tipo, servico, objeto, quantidade, local, endereco) {
        this.tipo = tipo,
        this.servico = servico,
        this.objeto = objeto,
        this.quantidade = quantidade,
        this.local = local,
        this.endereco = endereco;
    };

    mensagem() {
        const numeroExtensoFeminino = [
            'nenhuma', 'uma', 'duas', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
            'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove',
            'vinte', 'vinte%20e%20uma', 'vinte%20e%20duas', 'vinte%20e%20três', 'vinte%20e%20quatro', 'vinte%20e%20cinco', 'vinte%20e%20seis', 'vinte%20e%20sete', 'vinte%20e%20oito', 'vinte%20e%20nove',
            'trinta', 'trinta%20e%20uma', 'trinta%20e%20duas', 'trinta%20e%20três', 'trinta%20e%20quatro', 'trinta%20e%20cinco', 'trinta%20e%20seis', 'trinta%20e%20sete', 'trinta%20e%20oito', 'trinta%20e%20nove',
            'quarenta', 'quarenta%20e%20uma', 'quarenta%20e%20duas', 'quarenta%20e%20três', 'quarenta%20e%20quatro', 'quarenta%20e%20cinco', 'quarenta%20e%20seis', 'quarenta%20e%20sete', 'quarenta%20e%20oito', 'quarenta%20e%20nove',
            'cinquenta', 'cinquenta%20e%20uma', 'cinquenta%20e%20duas', 'cinquenta%20e%20três', 'cinquenta%20e%20quatro', 'cinquenta%20e%20cinco', 'cinquenta%20e%20seis', 'cinquenta%20e%20sete', 'cinquenta%20e%20oito', 'cinquenta%20e%20nove',
            'sessenta', 'sessenta%20e%20uma', 'sessenta%20e%20duas', 'sessenta%20e%20três', 'sessenta%20e%20quatro', 'sessenta%20e%20cinco', 'sessenta%20e%20seis', 'sessenta%20e%20sete', 'sessenta%20e%20oito', 'sessenta%20e%20nove',
            'setenta', 'setenta%20e%20uma', 'setenta%20e%20duas', 'setenta%20e%20três', 'setenta%20e%20quatro', 'setenta%20e%20cinco', 'setenta%20e%20seis', 'setenta%20e%20sete', 'setenta%20e%20oito', 'setenta%20e%20nove',
            'oitenta', 'oitenta%20e%20uma', 'oitenta%20e%20duas', 'oitenta%20e%20três', 'oitenta%20e%20quatro', 'oitenta%20e%20cinco', 'oitenta%20e%20seis', 'oitenta%20e%20sete', 'oitenta%20e%20oito', 'oitenta%20e%20nove',
            'noventa', 'noventa%20e%20uma', 'noventa%20e%20duas', 'noventa%20e%20três', 'noventa%20e%20quatro', 'noventa%20e%20cinco', 'noventa%20e%20seis', 'noventa%20e%20sete', 'noventa%20e%20oito', 'noventa%20e%20nove',
            'cem'
        ];
        
        const numeroExtensoMasculino = [
            'nenhum', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
            'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove',
            'vinte', 'vinte%20e%20um', 'vinte%20e%20dois', 'vinte%20e%20três', 'vinte%20e%20quatro', 'vinte%20e%20cinco', 'vinte%20e%20seis', 'vinte%20e%20sete', 'vinte%20e%20oito', 'vinte%20e%20nove',
            'trinta', 'trinta%20e%20um', 'trinta%20e%20dois', 'trinta%20e%20três', 'trinta%20e%20quatro', 'trinta%20e%20cinco', 'trinta%20e%20seis', 'trinta%20e%20sete', 'trinta%20e%20oito', 'trinta%20e%20nove',
            'quarenta', 'quarenta%20e%20um', 'quarenta%20e%20dois', 'quarenta%20e%20três', 'quarenta%20e%20quatro', 'quarenta%20e%20cinco', 'quarenta%20e%20seis', 'quarenta%20e%20sete', 'quarenta%20e%20oito', 'quarenta%20e%20nove',
            'cinquenta', 'cinquenta%20e%20um', 'cinquenta%20e%20dois', 'cinquenta%20e%20três', 'cinquenta%20e%20quatro', 'cinquenta%20e%20cinco', 'cinquenta%20e%20seis', 'cinquenta%20e%20sete', 'cinquenta%20e%20oito', 'cinquenta%20e%20nove',
            'sessenta', 'sessenta%20e%20um', 'sessenta%20e%20dois', 'sessenta%20e%20três', 'sessenta%20e%20quatro', 'sessenta%20e%20cinco', 'sessenta%20e%20seis', 'sessenta%20e%20sete', 'sessenta%20e%20oito', 'sessenta%20e%20nove',
            'setenta', 'setenta%20e%20um', 'setenta%20e%20dois', 'setenta%20e%20três', 'setenta%20e%20quatro', 'setenta%20e%20cinco', 'setenta%20e%20seis', 'setenta%20e%20sete', 'setenta%20e%20oito', 'setenta%20e%20nove',
            'oitenta', 'oitenta%20e%20um', 'oitenta%20e%20dois', 'oitenta%20e%20três', 'oitenta%20e%20quatro', 'oitenta%20e%20cinco', 'oitenta%20e%20seis', 'oitenta%20e%20sete', 'oitenta%20e%20oito', 'oitenta%20e%20nove',
            'noventa', 'noventa%20e%20um', 'noventa%20e%20dois', 'noventa%20e%20três', 'noventa%20e%20quatro', 'noventa%20e%20cinco', 'noventa%20e%20seis', 'noventa%20e%20sete', 'noventa%20e%20oito', 'noventa%20e%20nove',
            'cem'
        ];


        let qntExtenso;
        let plural;

        if(this.servico === 'abertura' || this.servico === 'copia' || this.servico === 'troca') {
            qntExtenso = numeroExtensoFeminino[this.quantidade];
        } else {
            qntExtenso = numeroExtensoMasculino[this.quantidade];
        }

        if(this.quantidade > 1) {
            plural = 's';
        } else {
            plural = '';
        }

        if(this.local === 'balcão') {
            const mesage = `Olá,%20gostaria%20de%20orçar%20um%20serviço%20${this.tipo}.%20Seria%20${qntExtenso}%20${this.servico}${plural}%20de%20${this.objeto}%20no%20${this.local}.`;

            return mesage;
        } else {
            const mesage = `Olá,%20gostaria%20de%20orçar%20um%20serviço%20${this.tipo}.%20Seria%20${qntExtenso}%20${this.servico}${plural}%20de%20${this.objeto},%20no%20endereço%20${this.endereco};`;

            return mesage;
        };
    };
};

// const enderecoCorrigido = endereco.replace(/\s/g, '%20');
// const budget = new Budget(tipo, servico, objeto, quantidade, local, enderecoCorrigido);
// const finalMesage = `https://api.whatsapp.com/send?phone=5553999826091&text=${budget.mensagem()}`;

// console.log(finalMesage);

export default Budget;