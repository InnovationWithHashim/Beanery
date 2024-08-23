import Image from "next/image";
import "@/app/menu/menu.css";
const Menu=()=>
{
    return(
        <>
        <section className="food-categories">
        <h2>Food <span>Categories</span></h2>
        
        <div className="category">
          <h3>Starters</h3>
          <div className="dish">
            <div className="dish-info">
              <h4>Garlic Butter Shrimp</h4>
              <p>Juicy shrimp sautéed in garlic butter, served with toasted bread - $12.99</p>
            </div>
            <div className="dish-image"><Image src="/images/m1.jpg" alt="Garlic Butter Shrimp" width={300} height={180} /></div>
            
          </div>

          <div className="dish">
            <div className="dish-info">
              <h4>Bruschetta</h4>
              <p>Fresh tomatoes, basil, and olive oil on toasted baguette - $8.99</p>
            </div>
            <div className="dish-image"><Image src="/images/m2.jpg" alt="Image of Bruschetta" width={300} height={180} /></div>
            
          </div>
        </div>

        <div className="category">
          <h3>Main Course</h3>
          <div className="dish">
            <div className="dish-info">
              <h4>Grilled Salmon</h4>
              <p>Wild-caught salmon with lemon herb butter and seasonal veggies - $19.99</p>
            </div>
            <div className="dish-image"><Image src="/images/m3.jpg" alt="Image of Grilled Salmon" width={300} height={180} /></div>
            
          </div>

          <div className="dish">
            <div className="dish-info">
              <h4>Steak Frites</h4>
              <p>Tender ribeye steak served with crispy fries - $24.99</p>
            </div>
            <div className="dish-image"><Image src="/images/m4.jpg" alt="Image of Steak Frites" width={300} height={180} /></div>
            
          </div>

          <div className="dish">
            <div className="dish-info">
              <h4>Signature Pasta Alfredo</h4>
              <p>Creamy Alfredo sauce with your choice of chicken or shrimp - $16.99</p>
            </div>
            <div className="dish-image"><Image src="/images/m5.jpg" alt="Image of Signature Pasta Alfredo" width={300} height={180} /></div>
            
          </div>
        </div>

        <div className="category">
          <h3>Desserts</h3>
          <div className="dish">
            <div className="dish-info">
              <h4>Chocolate Lava Cake</h4>
              <p>Warm chocolate cake with a gooey center, served with vanilla ice cream - $7.99</p>
            </div>
            <div className="dish-image"> <Image src="/images/m6.jpg" alt="Image of Chocolate Lava Cake" width={300} height={180} /></div>
           
          </div>

          <div className="dish">
            <div className="dish-info">
              <h4>Tiramisu</h4>
              <p>Classic Italian dessert with layers of mascarpone and coffee-soaked ladyfingers - $6.99</p>
            </div>
            <div className="dish-image"> <Image src="/images/m7.jpg" alt="Image of Tiramisu" width={300} height={180} /></div>
           
          </div>
        </div>

        <div className="category">
          <h3>Beverages</h3>
          <div className="dish">
            <div className="dish-info">
              <h4>Classic Mojito</h4>
              <p>Fresh mint, lime, and rum, perfectly muddled - $9.99</p>
            </div>
            <div className="dish-image"> <Image src="/images/m8.jpg" alt="Image of Classic Mojito"width={300} height={180} /></div>
           
          </div>

          <div className="dish">
            <div className="dish-info">
              <h4>House Red Wine</h4>
              <p>A full-bodied red with notes of cherry and oak - $7.99 per glass</p>
            </div>
            <div className="dish-image"><Image src="/images/m9.jpg" alt="Image of House Red Wine" width={300} height={180} /></div>
            
          </div>
        </div>
      </section>
        
        </>
        
    );
};
export default Menu;