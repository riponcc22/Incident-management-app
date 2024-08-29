
let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

// create a reference  to the model

let Byproduct = require('../models/Byproduct');

module.exports.fetchAllData = (req, res, next) => {
    Byproduct.find((err, products) => {
        if (err) {
            return console.error(err);
        } else {
            res.json(products); // Send all products as JSON
        }
    });
};

module.exports.displayProductList = async (req, res, next) => {
    try {
        const ProductList = await Byproduct.find();
        res.render('list', {
            title: 'Incident Survey list',
            productlist: ProductList,
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('add', {
        title: 'Add Incident Here',
        displayName: req.user ? req.user.displayName : ''
    });
}

// module.exports.performDelete = (req, res, next) => {
//     const id = req.params.id;

//     Byproduct.findByIdAndRemove(id)
//         .then(() => {
//             res.redirect('/data');
//         })
//         .catch((err) => {
//             console.log(err);
//             res.end(err);
//         });
// }

// module.exports.displayEditPage = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const userToEdit = await Byproduct.findById(id);
//         res.render('edit', {
//             title: 'Edit Incident', user: userToEdit,
//             displayName: req.user ? req.user.displayName : ''
//         });
//     } catch (err) {
//         console.error(err);
//         next(err); // Pass the error to the error handling middleware
//     }
// }

// module.exports.processEditPage = (req, res, next) => {
//     const id = req.params.id;

//     const updateUser = {
//         "incident": req.body.incident,
//         "description": req.body.description,
//         "date": req.body.date
//     };

//     Byproduct.findByIdAndUpdate(id, updateUser)
//         .then(() => {
//             res.redirect('/data');
//         })
//         .catch((err) => {
//             console.log(err);
//             res.end(err);
//         });
// }

// module.exports.processAddPage = (req, res, next) => {
//     const newUser = new Byproduct({
//         "incident": req.body.incident,
//         "description": req.body.description,
//         "date": req.body.date
//     });

//     newUser.save()
//         .then((Byproduct) => {
//             res.redirect('/data');
//         })
//         .catch((err) => {
//             console.log(err);
//             res.end(err);
//         });

        
// }
// module.exports.getProductList = async (req, res, next) => {
//     try {
//         // Remove the callback function and use async/await
//         const ProductList = await Byproduct.find();
//         console.log(ProductList);
//         res.json(ProductList);
//     } catch (err) {
//         console.error('Error fetching product list:', err.message);
//         next(err);  // This will pass the error to the error handling middleware
//     }
// };


module.exports.performDelete = (req, res, next) => {
    const id = req.params.id;
    console.log(`Attempting to delete incident with ID: ${id}`);


    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log('Invalid ID format');
        return res.status(400).json({ message: 'Invalid incident ID format' });
    }


    Byproduct.findByIdAndDelete(id)
        .then(() => {
            console.log('Incident deleted successfully');
            res.status(200).json({ message: 'Incident deleted successfully' });
           
        })
        .catch((err) => {
            console.error('Error deleting incident:', err);
            res.status(500).json({ message: 'Failed to delete incident', error: err });
        });
};






// module.exports.displayEditPage = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const userToEdit = await Byproduct.findById(id);
//         res.render('edit', {
//             title: 'Edit Incident', user: userToEdit,
//             displayName: req.user ? req.user.displayName : ''
//         });
//     } catch (err) {
//         console.error(err);
//         next(err); // Pass the error to the error handling middleware
//     }
// }


// module.exports.processEditPage = (req, res, next) => {
//     const id = req.params.id;


//     const updateUser = {
//         "incident": req.body.incident,
//         "description": req.body.description,
//         "date": req.body.date
//     };


//     Byproduct.findByIdAndUpdate(id, updateUser)
//         .then(() => {
//             res.redirect('/data');
//         })
//         .catch((err) => {
//             console.log(err);
//             res.end(err);
//         });
// }


// Display Edit Page
// module.exports.displayEditPage = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const incidentToEdit = await Byproduct.findById(id); // Fetch incident to edit
//         res.render('edit', {
//             title: 'Edit Incident',
//             user: incidentToEdit,
//             displayName: req.user ? req.user.displayName : ''
//         });
//     } catch (err) {
//         console.error(err);
//         next(err); // Pass the error to the error handling middleware
//     }
// };


module.exports.displayEditPage = async (req, res, next) => {
  try {
      const id = req.params.id;


      // Validate the ID format
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: 'Invalid ID format' });
      }


      const incidentToEdit = await Byproduct.findById(id); // Fetch the incident by ID
      if (!incidentToEdit) {
          return res.status(404).json({ message: 'Incident not found' });
      }


      res.status(200).json(incidentToEdit); // Return JSON data
  } catch (err) {
      console.error('Error fetching incident:', err);
      res.status(500).json({ message: 'Failed to fetch incident', error: err });
  }
};




// Process Edit Page
module.exports.processEditPage = (req, res, next) => {
    const id = req.params.id;


    const updatedIncident = {
        "incident": req.body.incident,
        "description": req.body.description,
        "date": req.body.date
    };


    Byproduct.findByIdAndUpdate(id, updatedIncident, { new: true }) // Use { new: true } to return the updated document
        .then((incident) => {
            res.status(200).json({ message: 'Incident updated successfully', incident });
        })
        .catch((err) => {
            console.log('Error updating incident:', err);
            res.status(500).json({ message: 'Failed to update incident', error: err });
        });
};




// module.exports.processAddPage = (req, res, next) => {
//     const newIncident = new Byproduct({
//         "incident": req.body.incident,
//         "description": req.body.description,
//         "date": req.body.date
//     });


//     newIncident.save()
//         .then((Byproduct) => {
//             res.redirect('/data');
//         })
//         .catch((err) => {
//             console.log(err);
//             res.end(err);
//         });


   
// }


module.exports.processAddPage = (req, res, next) => {
    const newIncident = new Byproduct({
        "incident": req.body.incident,
        "description": req.body.description,
        "date": req.body.date
    });


    newIncident.save()
        .then((savedIncident) => {
            // Send a JSON response instead of redirecting
            res.status(200).json({
                message: 'Incident added successfully',
                incident: savedIncident
            });
        })
        .catch((err) => {
            console.error('Error saving incident:', err);
            // Send a JSON error response
            res.status(500).json({
                message: 'Failed to add incident',
                error: err
            });
        });
}




module.exports.getProductList = async (req, res, next) => {
    try {
        const ProductList = await Byproduct.find();
        console.log(ProductList);
        res.json(ProductList);
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
}
