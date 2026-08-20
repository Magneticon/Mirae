var langSetTr;
StartLANG();
function StartLANG(){
	langSetTr = new ObjectMethods();
	langSetTr.Edit.addMethodToOBJM("translate",function(data){
		if (!data)
			return undefined;
		return eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)];
	});

	langSetTr.Edit.addMethodToOBJM("translateIn",function(data){
		if (!data)
			return undefined;
		return self.Edit.writeIn(eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)]);
	});

	langSetTr.Edit.addMethodToOBJM("translateInAdd",function(data){
		if (!data)
			return undefined;
		return self.Edit.writeInAdd(eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)]);
	});

	langSetTr.Edit.addMethodToOBJM("tr",function(data){
		if (!data)
			return undefined;
		return eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)];
	});

	langSetTr.Edit.addMethodToOBJM("trIn",function(data){
		if (!data)
			return undefined;
		return self.Edit.writeIn(eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)]);
	});

	langSetTr.Edit.addMethodToOBJM("trInAdd",function(data){
		if (!data)
			return undefined;
		return self.Edit.writeInAdd(eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)]);
	});
}