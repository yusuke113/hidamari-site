echo ""
echo "*****************************"
echo "start!! herokuサーバーへ修正を反映します"
echo "*****************************"
echo ""

git config user.name "Your Name"
git config user.email "youremail@example.com"
git add -A
git commit -m "update"
git push heroku master
heroku open

echo ""
echo "*****************************"
echo "complete!! 修正が反映されました"
echo "*****************************"
echo ""