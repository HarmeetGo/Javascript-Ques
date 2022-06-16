var groupData =[
    { name: "vpg-10", id: 1, storage: "30 GB" },
    { name: "vpg-12", id: 2, storage: "42 GB" },
    { name: "vpg-14", id: 3, storage: "38 GB" },
    { name: "vpg-10", id: 4, storage: "31 GB" },
    { name: "vpg-12", id: 5, storage: "72 GB" },
 ],
    result = groupData.reduce(function (r, a) {
        r[a.name] = r[a.name] || [];
        r[a.name].push(a);
        return r;
    },
     Object.create(null));

console.log(result);