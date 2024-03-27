// class Pet {

//     constructor (obj){
//         this.id = obj.id,
//         this.name= obj.name,
//         this.category= obj.category,
//         this.photoUrls= obj.photoUrls,
//         this.tags= obj.tags,
//         this.status= obj.status

//     }
// }

export class Buddies {
  constructor(membersList) {
    this.membersList = membersList;
  }

  getBuddiesName() {
    let list = [];
    
    this.membersList.forEach((pet) => {
      list.push(pet.name)
    });
    return list;
  }

  countBuddiesbyName() {
    let counter = {};
    const flatList = this.getBuddiesName().flat();

    for (const item of flatList) {
      if (counter[item]) {
        counter[item] += 1;
      } else {
        counter[item] = 1;
      }
    }
    
    return counter;
  }
}
