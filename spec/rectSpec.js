/**
 * Created by ALAN on 28/01/2017.
 */

describe("Tests the Rect type", function(){
    var r;

    it("creates a new Rect object and assigns values for each position and size", function(){
        r = new Rect(10,20,40,30);
        expect(r).toBeDefined();
        expect(r.x).toEqual(10.0);
        expect(r.y).toEqual(20.0);
        expect(r.width).toEqual(40.0);
        expect(r.height).toEqual(30.0);

    });

    it("Tells wheather a poisition is within the rectangle",function (){
        expect(r.width).toBeLessThan(41);
        expect(r.width).toBeGreaterThan(39);
        expect(r.height).toBeLessThan(31);
        expect(r.height).toBeGreaterThan(29);

    });

    it("Tests the rectangle can be moved to another position", function(){
        r = new Rect(10, 20, 40, 30);
        r.move(50,30);
        expect(r.x).toEqual(50);
        expect(r.y).toEqual(30);
        r.moveBy(15,15);
        expect(r.x).toEqual(65);
        expect(r.y).toEqual(45);

    });

    it("Test wheather a 2 rectanlges overlap", function(){
        r = new Rect(20, 10, 10, 15);
        r2 = new Rect(20, 10, 2, 3);
        r.overlaps(r,r2);
        expect(r.hit).toBe(true);
        expect(r2.hit).toBe(true);
        r = new Rect(10, 10, 10, 15);
        r2 = new Rect(21, 10, 2, 3);
        r.overlaps(r,r2);
        expect(r.hit).toBe(false);
        expect(r2.hit).toBe(false);

    });

    it("Test wheater2 rectanlges are the same object", function(){
        r = new Rect(20, 10, 10, 15);
        r2 = new Rect(20, 10, 10, 15);
        r.is(r,r2);
        expect(r.same).toBe(false);
        expect(r2.same).toBe(false);

    });
});
