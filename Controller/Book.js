const {Books,Sequelize} = require('../models')

async function createBooks(req,res){
     const BooksData = req.body;
    
    try {
        const name = BooksData.name;
        const image_url = BooksData.image_url;
        const Author = BooksData.Author;
        const pages  = BooksData.pages;
        const Price  = BooksData.Price;

        const result = await Books.create({name,image_url,Author,pages,Price
            
            
        })
        console.log('books created', result)
    
        res.status(201).send({msg:` ${name} Books added`,result,})
        

    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
    }
}

    // Here we create the function to get the all the books in database using find all methods
async function getAllBooks(req,res){
     try{
        const result = await Books.findAll();
            // console.log(result)
         res.status(201).send(result)
     }catch(err){
         res.status(500).send({msg: 'Internal server error',err})
        }
}

            //Here we create the function to get  the books 
            //by id in database using findone methods
async function BooksByid(req,res){
    const Bookid = req.params.id;
    try {
        const result = await Books.findOne({
            where:{
                id: Bookid
            }
        })
        console.log(result)
        res.status(200).send({msg:"Book has found",result})
    } catch (error) {
        res.status(500).send({msg:"Internal server error",})
    }
}




// Here we create a function to update the data 
async function updateBook(req,res){
    const BooksData = req.body;
	const BookId = req.params.id;
    // const options = { new: true };

    if(!(BooksData.name && BooksData.image_url && BooksData.Author && BooksData.pages && BooksData.Price)){
        res.status(400).send({msg : 'Name, image, Author & pages Price is missing'})
    }
	try{
        const name = BooksData.name;
        const image_url = BooksData.image_url;
        const Author = BooksData.Author;
        const pages  = BooksData.pages;
        const Price  = BooksData.Price;
         
        const result = await Books.findOne({
			where : {
				id : BookId
			}
		})
        if(result){
            result.name = name;
        result.image_url = image_url;
        result.Author = Author;
        result.pages = pages;
        result.Price = Price;
        
        result.save();
        
        res.status(200).send({msg:"Books got updated successfully"})
        }else{
           res.status(404).send({msg:"Books id does not exist"})
        }

    }catch(err){
		console.log('err in getting Books', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}


// here we create a delete function which will help us to delete the Books from databse by id
async function DeleteBooks(req,res){
    const Bookid = req.params.id
    try {
        const result = await Books.destroy({
            where:{
               id:Bookid
            }
        })
        console.log(result)
        res.status(200).send({msg:"book has deleted",result})
    } catch (error) {
        res.status(500).send({msg: 'Internal server error'}) 
    }
} 

module.exports = {
createBooks,
getAllBooks,
BooksByid,
DeleteBooks,
updateBook

}