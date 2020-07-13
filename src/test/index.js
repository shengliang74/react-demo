// async function main(){
//     const module1 = await import('./module1')
//     const module2 = await import('./module2');
//     console.log(module1);
//     console.log(module2);
// }
// main()

async function main() {
    const [module1, module2] =
      await Promise.all([
        import('./module1.js'),
        import('./module2.js')
      ]);
    console.log(module1, module2)
  }
  main();