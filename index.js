(async () => {
  const database = require("./db");
  const Equipamento = require("./equipamento");
  await database.sync();

  /*   const novoEquipamento = Equipamento.create({
    nome: "Bicicleta",
    preco: 1300,
    descricao: "Uso diário",
  }); */

  //console.log(novoEquipamento);
  const equipamentos = await Equipamento.findByPk(4); //.findAll tem também
  console.log(equipamentos);

  /*   equipamentos.descricao = "Bicicleta show";
  equipamentos.save(); */

  //await equipamento.destroy();
})();
