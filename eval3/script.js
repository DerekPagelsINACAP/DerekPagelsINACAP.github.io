function validaRUT() {
    rut = $("#rut").val();
    if (/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
        if (digitoVerificador(rut)) {
            alert("RUT Válido");
            registrarRUT();
        }
    } else {
        alert("RUT Inválido")
    }
}

function digitoVerificador(rut) {
    var M=0,S=1;
        for(;rut;rut=Math.floor(rut/10))
            S=(S+rut%10*(9-M++%6))%11;
        return S?S-1:'k';
}

function mostrarTutorial() {
    if (document.getElementById("mostrarTutorial").checked == true) {
        document.getElementById("tutorialRUT").style.display = "block";
    } else {
        document.getElementById("tutorialRUT").style.display = "none";
    }
}

nombresRegistrados = Array();
rutRegistrados = Array();

function registrarRUT() {
    nombresRegistrados.push($("#nombre").val());
    rutRegistrados.push($("#rut").val());
    $("#listaRegistros").html("");
    for (i = 0; i < (rutRegistrados.length); i++) {
        $("#listaRegistros").append("<li>" + nombresRegistrados[i] + " - " + rutRegistrados[i] + "</li>")
    }
}