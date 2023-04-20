cd ..
pnpm i

cd scripts
sh build.sh dev
sh dryBuild.sh es2016
sh dryBuild.sh es2017
sh dryBuild.sh es2018
sh dryBuild.sh es2019
sh dryBuild.sh es2020
sh dryBuild.sh es2021
sh dryBuild.sh es2022
sh dryBuild.sh esnext
echo "YScript build complete"